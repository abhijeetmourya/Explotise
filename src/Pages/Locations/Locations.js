import React, {useState, useEffect} from 'react';
import './Locations.css'
import LocationCards from './LocatonCards'
import { Link } from 'react-router-dom';
import axios from './axios.js';

function Locations() {

    const[locations, setLocation] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/locations/cards')

            setLocation(req.data)
        }
        fetchData()
    }, [])
    

    return (
        <div className="locations">
            <div className="back">
                <Link to="/"><h2>← Go Back</h2></Link>
            </div>
            <div className="locations_heading">
                <h1>Explore Locations</h1>
            </div>
            <div className="location_body">
                {locations.map((places) => (
                    <LocationCards locations={places} />
                ))}
            </div>
            <div className="location_footer">
                <h3>More On The Way....</h3>
            </div>
        </div>
    )
}

export default Locations
