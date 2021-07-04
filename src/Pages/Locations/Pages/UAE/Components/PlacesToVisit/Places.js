import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Burj Khalifa',
            imgUrl: 'https://res.klook.com/image/upload/u_activities:wnkhtwo4n0dhe6zmrbcs,h_1.0,ar_3:2,c_scale,e_blur:10000/c_fill,w_750,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/wnkhtwo4n0dhe6zmrbcs.jpg',
            url: 'https://en.wikipedia.org/wiki/Burj_Khalifa',
            description: 'The Burj Khalifa is one of the United Arab Emirates most famous buildings and the soaring sky-high landmark of Dubai.',
        },
        {
            name: 'Ferrari World',
            imgUrl: 'https://magic4.club/wp-content/uploads/2016/07/FWAD_2014_003_HR-Large-1024x681.jpg',
            url: 'https://en.wikipedia.org/wiki/Ferrari_World_Abu_Dhabi',
            description: 'Ferrari World Abu Dhabi is a mostly indoors amusement park on Yas Island in Abu Dhabi, United Arab Emirates. It is the first Ferrari-branded theme park and has the record for the largest space frame structure ever built.',
        },
        {
            name: 'Sheikh Zayed Mosque',
            imgUrl: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/06/16474784740_8bb68e40b0_b-1024x614.jpg',
            url: 'https://en.wikipedia.org/wiki/Sheikh_Zayed_Mosque',
            description: "Abu Dhabi's Sheikh Zayed Grand Mosque is a mammoth modern mosque of incredible beauty.",
        },
        {
            name: 'Louvre Abu Dhabi',
            imgUrl: 'https://s3-eu-west-1.amazonaws.com/b2bstorage.arte.tv/photos/0914434-cropped.jpg',
            url: 'https://en.wikipedia.org/wiki/Louvre_Abu_Dhabi',
            description: 'The newest and most spectacular museum in the United Arab Emirates, the Louvre Abu Dhabi takes visitors on a journey through human history.',
        },
        {
            name: 'Sharjah Museum',
            imgUrl: 'https://i.pinimg.com/originals/b7/e3/22/b7e322b383c816790dc1a44c1f9ace0f.jpg',
            url: 'https://en.wikipedia.org/wiki/Sharjah_Museum_of_Islamic_Civilization',
            description: "Sharjah's Museum of Islamic Civilization is the only museum in the country to focus on the breadth of Islamic history.",
        },
        {
            name: 'Dubai Creek',
            imgUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/67/bc.jpg',
            url: 'https://en.wikipedia.org/wiki/Dubai_Creek',
            description: 'Dubai Creek slices through the city, and the best way to experience Dubai is from one of the beautiful dhows (traditional Arabic boats) that ply the creek.',
        },
    ])

    return (
        <div className="places-uae">
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
