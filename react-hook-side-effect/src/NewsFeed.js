import React, { useState, useEffect } from 'react';


const defaultNews = {
    status: "ok",
    totalResult: 0,
    articles: []
}
const endpoint = "https://newsapi.org/v2/top-headlines?country=id&apiKey=d4eef434bb2848cca69d497ef7eb2b42";
function NewsFeed() {
    const [news, setNews] = useState(defaultNews)
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [isRefresh, setRefresh] = useState(false)
    const handleRefresh = () => {
        setNews(defaultNews)
        setPage(1)
        setLoading(false)
        setRefresh(false)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${endpoint}&page=${page}`)
                const result = await response.json()
                setNews(current => {
                    return (
                        {
                            ...result,
                            articles: [...current.articles, ...result.articles],
                            totalResult: result.totalResult,
                            status: result.status
                        }
                    )
                })
                if (result.status !== "ok") {
                    throw new Error('error')
                }
            }
            catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [page, isRefresh])
    return (
        <>
            <h3>Top News Headline</h3>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Try Again</p>}
            <ol>
                {news.articles.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ol>

            {
                news.articles.length < parseInt(news.totalResults) ? (
                    <button
                        disabled={isLoading}
                        onClick={() => setPage(c => c + 1)}
                    >Load More</button>

                ) : null
            }
            <button onClick={handleRefresh} disabled={isLoading}>
                Refresh{" "}</button>
        </>
    )
}
export default NewsFeed;
