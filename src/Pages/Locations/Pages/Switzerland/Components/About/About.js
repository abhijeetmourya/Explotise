import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About Switzerland</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>Switzerland</strong>, officially the Swiss Confederation, is a landlocked country situated at the confluence of Western, Central, and Southern Europe.<br />
                    </p> 

                    <p className="body-text"> 
                    It is a federal republic composed of 26 cantons, with federal authorities based in Bern.</p> <br />

                    <p className="body-text"> 
                    <strong>Switzerland</strong> is the birthplace of the Red Cross, one of the world's oldest and best known humanitarian organisations.
                    </p><br /> 

                    <p className="body-text" id="places">
                    Swiss national identity is rooted in a common historical background, shared values such as federalism and direct democracy
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Flag-map_of_Switzerland.svg" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
