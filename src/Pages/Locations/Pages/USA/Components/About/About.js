import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About USA</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    The <strong>United States of America</strong> (U.S.A. or USA), commonly known as the United States<br /> (U.S. or US) or America, is a country primarily located in North America. <br />
                    </p> 

                    <p className="body-text"> 
                    It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions.</p> <br />

                    <p className="body-text"> 
                    The <strong>United States</strong> is a federal republic and a representative democracy with three separate branches of government
                    </p><br /> 

                    <p className="body-text" id="places">
                    The <strong>United States</strong> is a highly developed country, and continuously ranks high in measures of socioeconomic performance. 
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag-map_of_the_United_States.svg" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
