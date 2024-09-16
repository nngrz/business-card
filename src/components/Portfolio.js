import React from "react"

export default function Portfolio() {
    return (
        <div className="portfolio--container">
            <h2 className="portfolio--title">Portfolio</h2>
            <div className="portfolio--link-container">
                <div className="projects">
                    {/* project--React Notes App */}
                    <a href="https://shimmering-malasada-04a43c.netlify.app" target="_blank" rel="noopener noreferrer" className="project--link">
                        React Notes App
                    </a>
                    <button>
                        <a href="https://github.com/nngrz/React-project-set/tree/main/notes_app" target="_blank" rel="noopener noreferrer" className="project--btn">
                            Source Code
                        </a>
                    </button>
                    <div className="project--technologies-bar">
                            <div className="bar js-react-notes"></div>
                            <div className="bar css-react-notes"></div>
                            <div className="bar html-react-notes"></div>
                    </div>
                </div>
            </div>
            <div className="technologies--legend">
                <div class="legend-item">
                    <span class="legend-color js"></span> JavaScript/React </div>
                <div class="legend-item">
                    <span class="legend-color css"></span> CSS </div>
                <div class="legend-item">
                    <span class="legend-color html"></span> HTML </div>
            </div>
        </div>
    )
}
