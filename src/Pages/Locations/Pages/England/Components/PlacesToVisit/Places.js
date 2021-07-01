import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'London',
            imgUrl: 'https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?b=1&k=6&m=1265900812&s=170667a&w=0&h=AtWqobpY7ifj8oqzjZys8O_kQiLiYynNfwFXvL8XBP0=',
            url: 'https://en.wikipedia.org/wiki/London',
            description: 'Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain.',
        },
        {
            name: 'Bath',
            imgUrl: 'https://www.historic-uk.com/wp-content/uploads/2017/01/bath-somerset.jpg',
            url: 'https://en.wikipedia.org/wiki/Bath,_Somerset',
            description: 'A precious city, Bath is home to some of the greatest Georgian architecture in the United Kingdom.',
        },
        {
            name: 'Liverpool',
            imgUrl: 'https://news.liverpool.ac.uk/wp-content/uploads/2020/07/LiverpoolSky-3w.jpg',
            url: 'https://en.wikipedia.org/wiki/Liverpool',
            description: 'Famed for its wonderful culture, winning football teams, The Beatles and a buzzing nightlife, Liverpool is one of the major cities of UK situated in Merseyside in England.',
        },
        {
            name: 'Manchester',
            imgUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/2/11/1423674319046/f8b554b3-fb78-406a-be40-8751e0f79288-2060x1236.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=82dab66f94e8dbad83927952b191b54d',
            url: 'https://en.wikipedia.org/wiki/Manchester',
            description: 'Lying in the heart of Greater Manchester, Manchester is a city in the North-western part of England.',
        },
        {
            name: 'York',
            imgUrl: 'https://c.files.bbci.co.uk/225C/production/_100469780_mediaitem100469779.jpg',
            url: 'https://en.wikipedia.org/wiki/York',
            description: 'An ancient cathedral city, York is situated in Yorkshire in England. This is the second most visited city in England after London and has some of the best preserved historical buildings and architecture in Europe.',
        },
        {
            name: 'Blackpool',
            imgUrl: 'https://media-exp3.licdn.com/dms/image/C561BAQHjqymPjgUkPg/company-background_10000/0/1544790778948?e=2159024400&v=beta&t=0TO0NYKGUgYJtrXOdzSrxoxIbSZixN4wvWzjWlaCZ3A',
            url: 'https://en.wikipedia.org/wiki/Blackpool',
            description: 'After London, Blackpool can be considered as the most popular tourist destination in the entire country of England. It is a popular seaside resort which has a vintage charm of its own.',
        },
    ])

    return (
        <div className="places-en">
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
