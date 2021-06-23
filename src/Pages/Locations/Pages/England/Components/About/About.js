import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About England</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>England</strong> is a country that is part of the United Kingdom. <br />
                    </p> 

                    <p className="body-text"> 
                    It shares land borders with Wales to its west and Scotland to its north.</p> <br />

                    <p className="body-text"> 
                    The Irish Sea lies northwest of <strong>England</strong> and the Celtic Sea to the southwest. 
                    </p><br /> 

                    <p className="body-text" id="places">
                    <strong>England</strong> is separated from continental Europe by the <be />North Sea to the east and the English Channel to the south.
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_map_of_England.svg/1200px-Flag_map_of_England.svg.png" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
