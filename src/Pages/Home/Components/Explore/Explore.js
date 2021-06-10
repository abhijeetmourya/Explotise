import React from 'react'
import './Explore.css'

function Explore() {
    return (
        <div className="explore">
            <div className="explore-heading">
                <h1>Explore</h1>
            </div>
            <div className="explore-body" >
                <div className="explore-card" href="#">
                    <h3>Locations</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>News</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Coding</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Gaming</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Tech</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Education</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Music</h3>
                </div>
                <div className="explore-card" href="#">
                    <h3>Fashion</h3>
                </div>
            </div>
        </div>
    )
}

export default Explore
