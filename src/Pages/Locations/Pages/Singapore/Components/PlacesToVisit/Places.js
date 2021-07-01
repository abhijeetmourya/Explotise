import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Universal Studios Singapore',
            imgUrl: 'https://images.thrillophilia.com/image/upload/s--OAlCzEM8--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/141/422/original/1547875968_uni4.jpg.jpg?1547875968',
            url: 'https://en.wikipedia.org/wiki/Universal_Studios_Singapore',
            description: 'Singapore boasts of featuring one of the most fun-filled adventure parks in the world, with adrenaline rushing rides and different world-famous themes.',
        },
        {
            name: 'Singapore Flyer',
            imgUrl: 'https://www.sweetsingapore.com/wp-content/uploads/2019/11/Singapore-Flyer-697x500.png',
            url: 'https://en.wikipedia.org/wiki/Singapore_Flyer',
            description: 'Singapore Flyer is one of the major things that make Singapore one of the top tourist destinations. It’s the tallest Ferris wheel in Asia which can hold 28 passengers in 28 air-conditioned capsules.',
        },
        {
            name: 'Gardens By The Bay',
            imgUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/08/c7/8f/98.jpg',
            url: 'https://en.wikipedia.org/wiki/Statue_of_Unity',
            description: 'The Gardens by the Bay is a nature park spanning 101 hectares (250 acres) in the Central Region of Singapore, adjacent to the Marina Reservoir.',
        },
        {
            name: 'Marina Bay',
            imgUrl: 'https://images.unsplash.com/photo-1599594026550-97d9565ceda3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFyaW5hJTIwYmF5JTIwc2FuZHMlMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            url: 'https://en.wikipedia.org/wiki/Marina_Bay_Sands',
            description: 'The aspect of Singapore which qualifies it to be on the list of ultramodern cities in the world, Marina Bay is replete with architectural masterpieces.',
        },
        {
            name: 'S.E.A. Aquarium',
            imgUrl: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/activities/eienx0jucrh4w9a87tkg/SEAAquarium%E2%84%A2One-DayTicket.jpg',
            url: 'https://www.rwsentosa.com/en/attractions/sea-aquarium/explore',
            description: 'Counted among the most brilliant creations of humankind in the entirety of Singapore, SEA Aquarium is a large aquarium housing more than 1,000 species of marine life.',
        },
        {
            name: 'Sentosa Merlion Tower',
            imgUrl: 'https://ak.picdn.net/shutterstock/videos/20357638/thumb/1.jpg',
            url: 'https://en.wikipedia.org/wiki/Merlion',
            description: 'The most iconic of all the tourist places in Singapore, Sentosa Merlion Tower is a 121 feet tall statue of Merlion erected on Sentosa Island.',
        },
    ])

    return (
        <div className="places-sp">
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
