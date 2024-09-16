import React from "react"

export default function Info() {
    return (
        <div className="info--container">
            <img src= "images/profile.jpg" className="info--image" />
            <h1 className="info--name">Ningrui Zhang</h1>
            <p className="info--role"> Frontend Developer</p>
            <a href="https://github.com/nngrz" target="_blank" rel="noopener noreferrer" className="info--github">
                <p className="info--github">GitHub: nngrz</p>
            </a>
            <div className="info--buttons">
                <a href="mailto:ningrui1227@gmail.com" className="btn--email">
                    <button className="btn--email">
                        <i className="fa fa-envelope email-icon"></i>Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ningrui-zhang1227" target="_blank" rel="noopener noreferrer">
                    <button className="btn--linkedin">
                        <i className="fa fa-linkedin-square linkedin-icon"></i>LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}
