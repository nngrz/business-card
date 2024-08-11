import React from "react"
import ReactDOM from "react-dom/client"

function Greeting() {
    return (
        <div>
            <h1>React-18 Boilerplate!</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Greeting />)
