import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About France</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>India</strong>, officially the Republic of <strong>India</strong>, is a country in South Asia. <br />
                    </p> 

                    <p className="body-text"> 
                    It is the second-most populous country, the seventh-largest country<br /> by land area, and the most populous democracy in the world.</p> <br />

                    <p className="body-text"> 
                    Bounded by the <strong>Indian</strong> Ocean on the south, the Arabian Sea on the <br /> southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west China, Nepal, and Bhutan to the north and Bangladesh and Myanmar to the east.
                    </p><br /> 

                    <p className="body-text" id="places">
                    In the <strong>India</strong> Ocean, <strong>India</strong> is in the vicinity of Sri Lanka and the Maldives its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://www.searchpng.com/wp-content/uploads/2018/12/Indian-independence-day-design-with-map.png" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
