import React from "react"
import PortfolioEntry from "./PortfolioEntry"

export default function Portfolio() {
    const projects = [
        {
            title: "React Notes App",
            link: "https://shimmering-malasada-04a43c.netlify.app",
            sourceCode: "https://github.com/nngrz/React-project-set/tree/main/notes_app",
            technologies: [
                {
                    percentage: 71.4,
                    name: "JavaScript/React",
                    classname: "bar js-react-notes"
                },
                {
                    percentage: 16.3,
                    name: "CSS",
                    classname: "bar css-react-notes"
                },
                {
                    percentage: 12.2,
                    name: "Html",
                    classname: "bar html-react-notes"
                }
            ]
        },
        {
            title: "Business Card",
            link: "https://nngrz.github.io/business-card/",
            sourceCode: "https://github.com/nngrz/business-card",
            technologies: [
                {
                    percentage: 55.1,
                    name: "JavaScript/React",
                    classname: "bar js-react-notes"
                },
                {
                    percentage: 37.3,
                    name: "CSS",
                    classname: "bar css-react-notes"
                },
                {
                    percentage: 7.6,
                    name: "Html",
                    classname: "bar html-react-notes"
                }
            ]
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
                        technologies={project.technologies}
                    />
                ))}
            </div>
            <div className="technologies--legend">
                <div className="legend-item">
                    <span className="legend-color js"></span> 
                    JavaScript/React 
                </div>
                <div className="legend-item">
                    <span className="legend-color css"></span> 
                    CSS 
                </div>
                <div className="legend-item">
                    <span className="legend-color html"></span> 
                    HTML 
                </div>
            </div>
        </div>
    )
}
