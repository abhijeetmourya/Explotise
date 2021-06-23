import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Places from './Components/PlacesToVisit/Places';

function USA() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Places />
        </div>
    )
}

export default USA;
