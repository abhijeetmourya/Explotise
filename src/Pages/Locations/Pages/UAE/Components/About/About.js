import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About UAE</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    The <strong>United Arab Emirates</strong>, sometimes simply called the Emirates,<br /> is a country in Western Asia located at the eastern end of the Arabian Peninsula. <br />
                    </p> 

                    <p className="body-text"> 
                    The UAE is an elective monarchy formed from a federation of seven emirates,<br /> consisting of Abu Dhabi (which serves as the capital).</p> <br />

                    <p className="body-text"> 
                    Each emirate is governed by a Sheikh and, together, they form the Federal Supreme Council.
                    </p><br /> 

                    <p className="body-text" id="places">
                    The UAE's economy is the most diversified of all the members of the Gulf Cooperation Council, while its most populous city, Dubai, is a global city and international hub.
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_map_of_the_United_Arab_Emirates.svg/1200px-Flag_map_of_the_United_Arab_Emirates.svg.png" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
