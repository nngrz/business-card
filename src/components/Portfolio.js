import React from "react"

export default function Portfolio() {
    return (
        <div className="portfolio--container">
            <h2 className="portfolio--title">Portfolio</h2>
            <div className="portfolio--link-container">
                <a href="https://shimmering-malasada-04a43c.netlify.app" target="_blank" rel="noopener noreferrer" className="portfolio--link">
                    React Notes App
                </a>
                <button>
                    <a href="https://github.com/nngrz/React-project-set/tree/main/notes_app" target="_blank" rel="noopener noreferrer" className="portfolio--btn">
                        Source Code
                    </a>
                </button>
            </div>
        </div>
    )
}
