import React from 'react'
import { Link } from 'react-router-dom'

function LocatonCards({ locations }) {
    return (
        <Link to={locations.path}>
            <div className="location_cards">
                <div className="locations_img">
                    <img src={locations.imgUrl} alt="" width="200px"/>
                </div>
                <div className="locations_body">
                    <h3>{locations.title}</h3>
                    <p>{locations.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default LocatonCards
