import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'The Matterhorn',
            imgUrl: 'https://i.ytimg.com/vi/GcAM5thCLls/maxresdefault.jpg',
            url: 'https://en.wikipedia.org/wiki/Matterhorn',
            description: "The Matterhorn, Switzerland's iconic pointed peak is one of the highest mountains in the Alps.",
        },
        {
            name: 'Jungfraujoch: The Top of Europe',
            imgUrl: 'https://mediaim.expedia.com/localexpert/185195/895636de-4261-4000-a278-20042ddf3a50.jpg?impolicy=resizecrop&rw=1005&rh=565',
            url: 'https://en.wikipedia.org/wiki/Jungfraujoch',
            description: 'One of the most popular things to do in the beautiful Bernese Oberland is the train journey to Jungfraujoch, the "Top of Europe," with an observation terrace and scientific observatory perched at 3,454 meters.',
        },
        {
            name: 'Interlaken',
            imgUrl: 'https://media.istockphoto.com/photos/thun-cityspace-with-alps-mountain-and-lake-in-switzerland-picture-id945092130?k=6&m=945092130&s=612x612&w=0&h=W3oIburQ_9GA-n9xfnH0G7WQxkRcvjgkb-1YcToKM1g=',
            url: 'https://en.wikipedia.org/wiki/Interlaken',
            description: "Nestled between Lake Thun to the west and Lake Brienz to the east, Interlaken is one of Switzerland's most popular summer holiday resorts.",
        },
        {
            name: 'Lucerne',
            imgUrl: 'https://media.cntraveler.com/photos/5825ee705a47f5d514fd5ea9/master/pass/GettyImages-160198232.jpg',
            url: 'https://en.wikipedia.org/wiki/Lucerne',
            description: 'Imagine a sparkling blue lake surrounded by mountains, a car-free medieval old town, covered bridges, waterfront promenades, frescoed historic buildings, and sun-splashed plazas with bubbling fountains.',
        },
        {
            name: 'Lake Geneva',
            imgUrl: 'https://frontiersinblog.files.wordpress.com/2018/04/frontiers-in-environmental-science-pollution-lake-geneva-lac_leman.jpg',
            url: 'https://en.wikipedia.org/wiki/Lake_Geneva',
            description: "Lake Geneva, Europe's largest Alpine lake, straddles the Swiss/French border, and laps at the shores of some of Switzerland's most popular cities.",
        },
        {
            name: 'Bern',
            imgUrl: 'https://static.officeholidays.com/images/1280x853c/switzerland-bern-01.jpg',
            url: 'https://en.wikipedia.org/wiki/Bern',
            description: "In a stunning location, perched on a peninsula of the River Aare, the Swiss capital of Bern exudes old world charm, and the city's medieval old town is a UNESCO World Heritage Site.",
        },
    ])

    return (
        <div className="places-sw">
            <div className="places_heading">
                <h1>Places To Visit</h1>
            </div>
                {
                    places.map((places) => (
                    <a href={places.url} target="_blank">
                        <div className="places_card">
                            <div className="places_body">
                                <h2 className="places_title">{places.name}</h2>
                                <p>{places.description}</p>
                            </div>
                            <div className="places_img">
                                <img src={places.imgUrl} width="200px"/>
                            </div>
                        </div>
                    </a>
                    ))
                }

                <div className="places_footer">
                    <h2>More To Be Added Soon .....</h2>
                </div>
        </div>
    )
}

export default Places
