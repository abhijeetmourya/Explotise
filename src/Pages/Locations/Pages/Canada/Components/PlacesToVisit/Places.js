import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Jasper National Park',
            imgUrl: 'https://i.ytimg.com/vi/xWufCJaq8BI/maxresdefault.jpg',
            url: 'https://en.wikipedia.org/wiki/Jasper_National_Park',
            description: 'As the largest national park in the Canadian Rockies, Jasper is ripe for exploration.',
        },
        {
            name: 'Banff',
            imgUrl: 'https://cdn.travelpulse.com/images/98aaedf4-a957-df11-b491-006073e71405/482a6339-0d45-4d13-9e12-c169778b6c42/630x355.jpg',
            url: 'https://en.wikipedia.org/wiki/Banff,_Alberta',
            description: 'Nestled amid the foothills of the Canadian Rockies, this tiny mountain town in Alberta appeals to both nature enthusiasts and luxury seekers.',
        },
        {
            name: 'Vancouver',
            imgUrl: 'https://cdn.pixabay.com/photo/2019/10/28/23/22/vancouver-4585887_960_720.jpg',
            url: 'https://en.wikipedia.org/wiki/Vancouver',
            description: 'A trip to Vancouver is all about embracing the outdoors. Vancouverites spend their days skiing on Grouse Mountain, swimming at Kitsilano Beach and strolling through sprawling Stanley Park.',
        },
        {
            name: 'Niagara Falls',
            imgUrl: 'https://cdn.getyourguide.com/img/location/5a0838fb3c49e.jpeg/88.jpg',
            url: 'https://en.wikipedia.org/wiki/Niagara_Falls,_Ontario',
            description: ' Explore the falls from above during a helicopter tour, or see them up close by walking alongside them.',
        },
        {
            name: 'Gros Morne National Park',
            imgUrl: 'https://i.ytimg.com/vi/FiS4u98Scx8/maxresdefault.jpg',
            url: 'https://en.wikipedia.org/wiki/Gros_Morne_National_Park',
            description: "This UNESCO World Heritage Site encompasses nearly 458,000 acres of land on Newfoundland's west coast. Its top activity is undoubtedly hiking through the Tablelands.",
        },
        {
            name: 'Mont-Tremblant',
            imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/8a/0c/23/exterior-winter.jpg',
            url: 'https://en.wikipedia.org/wiki/Mont-Tremblant',
            description: "Located about 80 miles northwest of Montreal in Quebec's Laurentian Mountains, Mont-Tremblant is best known for its skiing, specifically Mont Tremblant Ski Resort, which occupies the highest peak in the mountain range.",
        },
    ])

    return (
        <div className="places-ca">
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
