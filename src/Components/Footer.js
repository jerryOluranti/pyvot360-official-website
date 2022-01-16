import React from 'react'

import Icon from '../assets/icon-white.svg'

import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer" id="footer">
            <img src={Icon} alt="" />
            <a href="#p-s" className="tagline">flexible, comprehensive services</a>
            <div className="copyright">Pyvot360 © 2022, All Rights Reserved</div>
        </footer>
    )
}

export default Footer
