import React from "react"
import PortfolioEntry from "./PortfolioEntry"

export default function Portfolio() {
    const projects = [
        {
            title: "React Notes App",
            link: "https://shimmering-malasada-04a43c.netlify.app",
            sourceCode: "https://github.com/nngrz/React-project-set/tree/main/notes_app"
        },
        {
            title: "Business Card",
            link: "https://nngrz.github.io/business-card/",
            sourceCode: "https://github.com/nngrz/business-card"
        }
    ]

    return (
        <div className="portfolio--container">
            <h2 className="portfolio--title">Portfolio</h2>
            <div className="portfolio--link-container">
                {projects.map((project, index) => (
                    <PortfolioEntry 
                        key={index}
                        title={project.title}
                        link={project.link}
                        sourceCode={project.sourceCode}
                    />
                ))}
            </div>
        </div>
    )
}
