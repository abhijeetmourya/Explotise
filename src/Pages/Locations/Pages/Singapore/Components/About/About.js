import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About Singapore</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>Singapore</strong>, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia. <br />
                    </p> 

                    <p className="body-text"> 
                    It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula.</p> <br />

                    <p className="body-text"> 
                    Bhe country's territory is composed of one main island, 63 satellite islands and islets, and one outlying islet, the combined area of which has increased by 25% since the country's independence as a result of extensive land reclamation projects.
                    </p><br /> 

                    <p className="body-text" id="places">
                    It has the second greatest population density in the world.
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_map_of_Singapore.svg" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
