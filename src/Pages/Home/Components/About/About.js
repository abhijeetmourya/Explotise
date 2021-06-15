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
                <div>
                    <p className="body-text">
                        <strong>Explotise</strong> is an open source<br />
                        free to use platform
                    </p>
                    <p className="body-text">
                        <strong>Explotise</strong> is a website where you can <br />
                        explore multiple stuff at the same place.<br />
                        From locations to Fashion anything you like
                    </p>
                    <p className="body-text">
                        <strong>Explotise</strong> brings the latest information for<br />
                        you to sit back and explore whatever you like.
                    </p>
                    <p  className="body-text" id="explore">
                        <strong>Please vote if you liked the build 💖</strong>
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://i.ibb.co/rZrkbDJ/DIFFERENT-TYPES-of-WEBSITES-jpg-CIaku32-S-700x410-removebg-preview.png" />
                </div>
            </div>
        </div>
    )
}

export default About
