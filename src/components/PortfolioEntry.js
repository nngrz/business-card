import React from "react"

export default function PortfolioEntry({title, link, sourceCode, technologies}) {
    return (
        <div className="projects">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project--link">
                {title}
            </a>
            <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <button className="project--btn">Source Code</button>
            </a>
            <div className="project--technologies-bar">
                {technologies.map((technology, index) => (
                    <div key={index} className={technology.classname} style={{width:`${technology.percentage}%`}}></div>
                ))}
            </div>
        </div>       
    )
}
