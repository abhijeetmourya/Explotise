import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" >
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>What is Explotise ?</h2>
            </div>
            <div className="about-body">
                <p className="body-text">
                    Explotise is a website where you can explore multiple stuff at the same place.
                    This includes Locations, News, Tech, Fashion and many more.
                </p>
                <p className="body-text" id="explore">
                    Explotise brings the latest information for you to sit back and explore whatever you like.
                </p>
            </div>
        </div>
    )
}

export default About
