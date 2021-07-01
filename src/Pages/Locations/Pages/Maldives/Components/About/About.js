import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About Maldives</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>Maldives</strong>, officially the Republic of Maldives, is a small archipelagic state in South Asia situated in the Indian Ocean.<br />
                    </p> 

                    <p className="body-text"> 
                    It lies southwest of Sri Lanka and India, about 700 kilometres (430 mi) from the Asian continent's mainland.</p> <br />

                    <p className="body-text"> 
                    The chain of 26 atolls stretches from Ihavandhippolhu Atoll in the north to Addu Atoll in the south (across the Equator).
                    </p><br /> 

                    <p className="body-text" id="places">
                    Maldives is one of the world's most geographically dispersed sovereign states as well as the smallest Asian country by land area
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://cdn.pixabay.com/photo/2020/06/21/05/20/maldives-5323258_960_720.png"  height="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
