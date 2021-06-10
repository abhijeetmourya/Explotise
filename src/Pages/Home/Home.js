import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Explore from './Components/Explore/Explore'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Explore />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
