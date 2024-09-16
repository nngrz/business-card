import React from "react"

export default function PortfolioEntry({title, link, sourceCode}) {
    return (
        <div className="projects">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project--link">
                {title}
            </a>
            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="project--btn">
                <button>Source Code</button>
            </a>
        </div>       
    )
}
