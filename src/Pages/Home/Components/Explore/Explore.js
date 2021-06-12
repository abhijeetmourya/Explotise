import React from 'react'
import './Explore.css'
import { Link } from 'react-router-dom'

function Explore() {
    return (
        <div className="explore">
                <div className="explore-heading">
                    <h1>Explore</h1>
                </div>
            <div className="explore-body" >
                <Link>
                    <div className="explore-card" href="#">
                        <h3>Locations</h3>
                    </div>
                </Link>
                <Link to="/news">
                    <div className="explore-card" href="#">
                        <h3>News</h3>
                    </div>
                </Link>
                <Link to="/sports">
                    <div className="explore-card" href="#">
                        <h3>Sports</h3>
                    </div>
                </Link>
                <Link to="/tech">
                    <div className="explore-card" href="#">
                        <h3>Tech</h3>
                    </div>
                </Link>
                <Link to="/gaming">
                    <div className="explore-card" href="#">
                        <h3>Gaming</h3>
                    </div>
                </Link>
                <Link to="/fashion ">
                    <div className="explore-card" href="#">
                        <h3>Fashion</h3>
                    </div>
                </Link>
                
            </div>
            <div className="explore-footer">
                <h2>More On The Way....</h2>
            </div>
        </div>
    )
}

export default Explore
