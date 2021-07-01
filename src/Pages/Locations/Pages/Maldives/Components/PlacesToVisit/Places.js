import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Malé Atoll',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/10/Mal%C3%A9-Maldives.jpg',
            url: 'https://en.wikipedia.org/wiki/Mal%C3%A9_Atoll',
            description: 'Located on the southern edge of Kaafu Atoll, the North Malé Atoll is the largest city and the most popular destination among the best places to visit in Maldives.',
        },
        {
            name: ' Sun Island ',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/02/Sun-Island-Nalaguraidhoo.jpg',
            url: 'https://www.villahotels.com/sun-island/',
            description: 'Also famous as the Sun Island, Nalaguraidhoo Island in South Ari Atoll is among the top Maldives points of intrest.',
        },
        {
            name: 'Banana Reef',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/02/Banana-Reef.jpg',
            url: 'https://www.alphamaldives.com/blog/diving-in-banana-reef/',
            description: 'Located in North Mal- Atoll, Banana Reef is globally renowned for being one of the best diving sites in the world which adds it to the list of top Maldives points of interest.',
        },
        {
            name: 'Alimatha Island',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/02/Alimatha-Island-Vaavu-Atoll.jpg',
            url: 'https://www.holidify.com/places/maldives/alimatha-island-central-beach-sightseeing-1256545.html',
            description: 'Sitting on the eastern edge of Maldives, Alimatha Island is located in Vaavu Atoll. With its azure, crystal clear waters — apt for diving, snorkeling and boating, the island is a perfect spot for a family vacation and for honeymoon too, since it is considered one of the best places to visit in Maldives for couples.',
        },
        {
            name: 'Artificial Beach',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/02/Artificial-Beach.jpg',
            url: 'https://www.holidify.com/places/maldives/artificial-beach-sightseeing-124838.html',
            description: 'Situated in North Mal- Atoll, this beach is what its name tells you – artificial. It is the favorite haunt of the swimming enthusiasts among the top places to visit in Maldives. ',
        },
        {
            name: 'HP Reef',
            imgUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/02/HP-Reef.jpg',
            url: 'https://www.holidify.com/places/maldives/hp-reef-sightseeing-124839.html',
            description: 'Stationed in North Mal- Atoll, HP Reef is among the top-rated tourist attractions in Maldives. It is a protected marine location that witnesses the widespread presence of a variety of marine creatures.',
        },
    ])

    return (
        <div className="places-md">
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
