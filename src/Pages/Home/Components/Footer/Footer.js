import React from 'react'
import CopyrightNotice from 'react-copyright-notice-component'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="#logo"><i class="fab fa-github"></i></a>
                <a href="#logo"><i class="fab fa-github"></i></a>
            </div>
            <div className="copyright">
                <span>Copyright</span>
                <CopyrightNotice copyrightHolder="Blazicators" year="2021"></CopyrightNotice>
            </div>
        </div>
    )
}

export default Footer;
