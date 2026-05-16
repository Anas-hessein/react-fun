import { createRoot } from "react-dom/client"
import { Fragment } from "react"
import Header from "./header"
import Main from "./MainContent"
import Footer from "./footer"
import "./index.css"

const root = createRoot(document.getElementById("root"))

root.render(
   <App />
)

function App() {
    return (  
    <>
        <Header />
        <Main />
        <Footer />
    </>
    )
}

