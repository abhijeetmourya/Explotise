import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Eiffel Tower',
            imgUrl: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc3NjU2MjA4ODc2ODcz/this-day-in-history-03311889---eiffel-tower-opens.jpg',
            url: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
            description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        },
        {
            name: 'Louvre Museum',
            imgUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/91/a9/0b.jpg',
            url: 'https://en.wikipedia.org/wiki/Louvre',
            description: "the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France, and is best known for being the home of the Mona Lisa.",
        },
        {
            name: 'Palace of Versailles',
            imgUrl: 'https://www.premierclubrewards.org/blog/wp-content/uploads/2015/07/110096741.jpg',
            url: 'https://en.wikipedia.org/wiki/Palace_of_Versailles',
            description: 'The Palace of Versailles was the principal royal residence of France from 1682, under Louis XIV, until the start of the French Revolution in 1789, under Louis XVI.',
        },
        {
            name: "Côte d'Azur",
            imgUrl: 'https://www.oliverstravels.com/blog/wp-content/uploads/2015/12/French-Riviera-Travel-Guide.jpg',
            url: 'https://en.wikipedia.org/wiki/Provence-Alpes-C%C3%B4te_d%27Azur',
            description: "Provence-Alpes-Côte d'Azur is one of the eighteen administrative regions of France, the far southeastern on the mainland.",
        },
        {
            name: 'Mont Saint-Michel',
            imgUrl: 'https://1fmflz2fx4k436sgqe49qldm-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/Mont-Saint-Michel-By-Vicky-SP-shutterstock_208247467-2100x1200.jpg',
            url: 'https://en.wikipedia.org/wiki/Mont-Saint-Michel',
            description: 'Le Mont-Saint-Michel is a tidal island and mainland commune in Normandy, France. ',
        },
        {
            name: 'Loire Valley Châteaux',
            imgUrl: 'https://i.pinimg.com/originals/e0/67/a4/e067a4481d6a7e82e5834297de9938b0.jpg',
            url: 'https://en.wikipedia.org/wiki/Ch%C3%A2teaux_of_the_Loire_Valley',
            description: 'The Châteaux of the Loire Valley are part of the architectural heritage of the historic towns of Amboise, Angers, Blois, Chinon, Montsoreau, Nantes, Orléans, Saumur, and Tours along the Loire River in France.',
        },
    ])

    return (
        <div className="places-fr">
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
