import React from 'react';
import './Home.css';

function Home() {
    return (
        <section className="navbar">
            <div className="brand-title">Explore</div>
            <div className="navbar-links">
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                 </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Home
