import React from 'react';
import "./About.css";

function About() {
    return(
        <div className='App body'>
            <div className="all">
                <div className="lefter links">
                    <a href="https://my-first-mini-app.web.app/" target="_blank" rel="noopener noreferrer">First App</a>
                </div>
                <div className="left links">
                    <a href="https://login-app-8940e.web.app/login" target="_blank" rel="noopener noreferrer">Login App</a>
                </div>
                <div className="center">
                    <div className="explainer"><span>Hover me</span></div>
                </div>
                <div className="right links">
                    <a href="https://github.com/TeaFant" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="righter links">
                    <a href="https://linkedin.com/in/tea-fantela" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default About;