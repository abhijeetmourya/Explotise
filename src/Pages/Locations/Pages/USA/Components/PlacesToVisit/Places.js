import React, { useState } from 'react'
import './Places.css'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Grand Canyon',
            imgUrl: 'https://knowablemagazine.org/pb-assets/knowable-assets/article-assets/twitter/10.1146/knowable-022619-1-1200x630-1606933670567.jpg',
            url: 'https://en.wikipedia.org/wiki/Grand_Canyon',
            description: 'This incredible natural attraction is one of the most visited places in the United States.',
        },
        {
            name: 'Statue of Liberty',
            imgUrl: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg',
            url: 'https://en.wikipedia.org/wiki/Statue_of_Liberty',
            description: "A universal symbol of freedom, the Statue of Liberty is America's most familiar icon and the largest statue in the world. Standing proudly in New York Harbor, visitors can admire the statue from various points around the city, particularly Battery Park, or take a ferry right to the statue.",
        },
        {
            name: 'White House',
            imgUrl: 'https://cdn.britannica.com/43/93843-004-8F6812E5.jpg',
            url: 'https://en.wikipedia.org/wiki/White_House',
            description: 'The White House is the official residence of the President of the United States, and should be on the top of your list of things to see in Washington.',
        },
        {
            name: 'Walt Disney World Resort',
            imgUrl: 'https://ewscripps.brightspotcdn.com/dims4/default/5302b3f/2147483647/strip/true/crop/0x0+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fwww.dontwasteyourmoney.com%2Fwp-content%2Fuploads%2F2019%2F07%2F611910256_walt-disney-world-e1563453095573.jpg',
            url: 'https://en.wikipedia.org/wiki/Walt_Disney_World',
            description: 'This mega amusement park in Orlando is the top family attraction in America, and has been catering to both young and old for decades.',
        },
        {
            name: 'Kennedy Space Center',
            imgUrl: 'https://www.universetoday.com/wp-content/uploads/2016/10/KSC-20161008-PH-CSH01_01_0041-1024x683-1280x720.jpg',
            url: 'https://en.wikipedia.org/wiki/Kennedy_Space_Center_Visitor_Complex',
            description: 'For those who have ever dreamed about what it would be like to blast off into space, a trip to the Kennedy Space Center is a must-do.',
        },
        {
            name: 'Times Square',
            imgUrl: 'https://media.wired.com/photos/59265c018d4ebc5ab8069fd2/4:3/w_929,h_697,c_limit/TS-HP-201001_NY_Times_Square_Sn_hetta_N58.jpg',
            url: 'https://en.wikipedia.org/wiki/Times_Square',
            description:"Bustling Times Square, famous for its flashing billboards, New Year's Eve count down, and constant throngs of people, lies at the heart of Midtown Manhattan.",
        },
    ])

    return (
        <div className="places-usa">
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
