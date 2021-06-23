import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-subheading">
                <h2>About Canada</h2>
            </div>
            <div className="about-body">
                <div>
                    <p className="body-text">
                    <strong>Canada </strong>is a country in North America. <br />
                    </p> 

                    <p className="body-text"> 
                    Its ten provinces and three territories extend from the Atlantic to the Pacific <br /> and northward into the Arctic Ocean, covering 9.98 million square kilometres <br /> (3.85 million square miles), making it the world's second-largest country by total area.</p> <br />

                    <p className="body-text"> 
                    Its southern and western border with the United States, <br />  stretching 8,891 kilometres (5,525 mi), is the world's longest bi-national land border.
                    </p><br /> 

                    <p className="body-text" id="places">
                    <strong>Canada's</strong> capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.
                    </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Canada_flag_map.svg" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
