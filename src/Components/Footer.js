import React from 'react'

import Icon from '../assets/icon-white.svg'

import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-group">
                <img src={Icon} alt="" />
                <a href="#p-s" className="tagline">flexible, comprehensive services</a>
            </div>
            <div className="copyright">Pyvot360 © 2022, All Rights Reserved</div>
        </footer>
    )
}

export default Footer
