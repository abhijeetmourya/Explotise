import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Rome',
            imgUrl: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
            url: 'https://en.wikipedia.org/wiki/Rome',
            description: "Both for its history as the capital of much of Europe and for its present day role as one of Europe's most vibrant cities, for most tourists traveling to Italy, Rome heads the list of places to visit.",
        },
        {
            name: 'Florence',
            imgUrl: 'https://winewedsandmore.com/wp-content/uploads/wedding-in-florence-tuscany-italy-scaled.jpg',
            url: 'https://en.wikipedia.org/wiki/Florence',
            description: 'The showcase of the Italian Renaissance, Florence can at times seem like one giant art museum. ',
        },
        {
            name: 'Venice',
            imgUrl: 'https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg',
            url: 'https://en.wikipedia.org/wiki/Venice',
            description: 'Who could fail to love a city whose streets are made of water, whose buses are boats, and where the songs of gondoliers linger in the air? It is a magic city, and its major attraction to tourists is the city itself.',
        },
        {
            name: 'Tuscan Hill Towns',
            imgUrl: 'https://www.wanderingitaly.com/images/hill-towns-anghiari.jpg',
            url: 'https://en.wikipedia.org/wiki/Tuscany',
            description: 'The undulating landscape of Tuscany is crowned by stone towns whose foundations go back to the Etruscans.',
        },
        {
            name: 'Milan',
            imgUrl: 'https://cdn.diffords.com/contrib/encyclopedia/2019/06/5d15ea49d076e.jpg',
            url: 'https://en.wikipedia.org/wiki/Milan',
            description: "Although Milan is a major entry point for tourists because of its airport, it's often overlooked as a destination of its own.",
        },
        {
            name: 'Lake Como',
            imgUrl: 'https://lp-cms-production.imgix.net/2019-06/34526254.jpg',
            url: 'https://en.wikipedia.org/wiki/Lake_Como',
            description: "Italy's most beautiful lake, Como has been the favorite summer retreat of the rich and famous since ancient Romans fled Milan's summer heat to cool off in villas along its steep shores.",
        },
    ])

    return (
        <div className="places-it">
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
