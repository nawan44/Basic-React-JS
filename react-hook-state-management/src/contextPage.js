import { createContext } from "react";
import "./App.css";

const { Provider, Consumer } = createContext("en")

function LandPage() {
    return (
        <>
            <Provider value="id">
                <Header />
                <Content />
                <Footer />
            </Provider>

        </>
    );
}
function Header() {

}
function Menu() {

}
function Content() {

}
function Footer() {
    return (
        <Consumer>
            <>
                <i>
                    --Footer --
</i>
                <p>Language : </p>
            </>
        </Consumer>
    );
}

export default LandPage;