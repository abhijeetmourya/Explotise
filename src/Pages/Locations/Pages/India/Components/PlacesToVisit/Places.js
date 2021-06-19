import React, { useState } from 'react'

function Places() {

    const [places, setPlaces] = useState([
        {
            name: 'Taj Mahal',
            imgUrl: 'https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
            url: 'https://en.wikipedia.org/wiki/Taj_Mahal',
            description: 'The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.',
        },
        {
            name: 'Dal Lake',
            imgUrl: 'https://static.toiimg.com/thumb/72023928/dal-lake.jpg?width=1200&height=900',
            url: 'https://en.wikipedia.org/wiki/Dal_Lake',
            description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, which is the second largest in the union territory of Jammu and Kashmir.',
        },
        {
            name: 'Statue Of Unity',
            imgUrl: 'https://guruobserver.s3.us-west-2.amazonaws.com/wp-content/uploads/2018/11/21123640/SardarPatel.jpg',
            url: 'https://en.wikipedia.org/wiki/Statue_of_Unity',
            description: 'The Statue of Unity is a colossal statue of Indian statesman and independence activist Vallabhbhai Patel, who was the first Deputy Prime Minister and Home Minister of independent India',
        },
        {
            name: 'Charminar',
            imgUrl: 'https://static.india.com/wp-content/uploads/2018/10/Charminar-Hyderabad.jpg?impolicy=Medium_Resize&w=1200&h=800',
            url: 'https://en.wikipedia.org/wiki/Charminar',
            description: 'The Charminar constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad and is listed among the most recognised structures in India.',
        },
        {
            name: 'India Gate',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/India_Gate_%2CDelhi_%2C_India.jpg',
            url: 'https://en.wikipedia.org/wiki/India_Gate',
            description: 'The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. ',
        },
        {
            name: 'Gateway Of India',
            imgUrl: 'https://mediaindia.eu/wp-content/uploads/2020/01/sarang-pande-k3SHcT9zGkE-unsplash.jpg',
            url: 'https://en.wikipedia.org/wiki/Gateway_of_India',
            description: 'The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra.',
        },
    ])

    return (
        <div className="places">
            <div className="places-heading">
                <h1>Places To Visit</h1>
            </div>
        </div>
    )
}

export default Places
