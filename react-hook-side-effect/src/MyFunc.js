import React, { useState, useEffect } from 'react';

function MyFunc() {
    console.log("-> function init");
    const [count, setCount] = useState(0);
    const handleCount = () =>
        setCount(prevState => {
            return prevState + 1;
        });
    useEffect(() => {
        console.log("-> my first effect")
        // handleCount()
    })
    useEffect(() => {
        console.log("-> componentDidMount equivalent")
        // handleCount()
    }, [])
    useEffect(() => {
        if (count > 0) {
            console.log("-> componentDidUpdate equivalent")
        }
        // handleCount()
    }, [count])
    useEffect(() => {
        return (
            () => {
                console.log("componentWillUnMount equivalent");
            }
        )
    }, [])

    console.log(`-> Start Render (${count})`);
    return (
        <div>
            <h1>Function Component</h1>
            <p>
                <button onClick={handleCount}>
                    Count
                    </button>
                {count}
            </p>
        </div>
    );

}
export default MyFunc