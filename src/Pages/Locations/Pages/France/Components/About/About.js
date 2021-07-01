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
                    <strong>France</strong>, officially the <strong>French</strong> Republic, is a country primarily located in Western Europe,<br /> consisting of metropolitan France and several overseas regions and territories.
                    </p> 

                    <p className="body-text"> 
                    The metropolitan area of <strong>France</strong> extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea.</p> <br />

                    <p className="body-text"> 
                    The overseas territories include <strong>French</strong> Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans.
                    </p><br /> 

                    <p className="body-text" id="places">
                    <strong>France</strong> borders Belgium, Luxembourg and Germany to the northeast, Switzerland,<br /> Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. 
                     </p>
                    
                </div>
                <div className="about-image-in">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/France_Flag_Map.svg/245px-France_Flag_Map.svg.png" width="300px" />
                </div>
            </div>
        </div>
    )
}

export default About
