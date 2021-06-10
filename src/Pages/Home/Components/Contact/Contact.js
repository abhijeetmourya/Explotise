import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact-heading">
                <h1>Contact</h1>
            </div>
            <div className="contact-subheading">
                <h2>Get In Touch</h2>
            </div>
            <div className="contact-body">
                
                <form className="contact-form">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
                <div className="contact-image">
                    <img src="https://www.linkpicture.com/q/contact-header-mobile-removebg-preview.png" type="image" />
                </div>
            </div>
        </div>
    )
}

export default Contact
