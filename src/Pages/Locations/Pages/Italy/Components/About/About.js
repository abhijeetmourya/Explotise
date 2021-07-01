import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About Italy</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <storng>Italy</storng>, officially the <strong>Italian</strong> Republic, is a country consisting of a peninsula<br /> delimited by the Alps and several islands surrounding it.
                    </p> 

                    <p className="body-text"> 
                    <strong>Italy</strong> is located in south-central Europe, and is also considered part of Western Europe.</p> <br />

                    <p className="body-text"> 
                    A unitary parliamentary republic with Rome as its capital and largest city, the country<br /> covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with<br /> France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino.
                    </p><br /> 

                    <p className="body-text" id="places">
                    Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa).
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_map_of_Italy.svg/1200px-Flag_map_of_Italy.svg.png" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
