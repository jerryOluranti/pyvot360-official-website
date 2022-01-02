import React from 'react'

import '../styles/Hero.css'
import '../styles/rocket-animation.css'
import LogoSvg from '../assets/logo-white-horizontal.svg'
import {ReactComponent as Rocket} from '../assets/rocket.svg'
import CTAAsset from '../assets/triangle-asset-orange.svg'

import { motion } from 'framer-motion'

function Hero() {
    return (
      <div className="hero-container" id="home">
        <div className="hero-header">
          <img src={LogoSvg} alt="" width="200px" />
          <div className="hero-nav-links">
            <a className="nav-link" href="#home">
              HOME
            </a>
            <a className="nav-link" href="#about">
              ABOUT
            </a>
            <a className="nav-link" href="#p-s">
              PRODUCTS & SERICES
            </a>
            <a className="nav-link" href="#team">
              OUR TEAM
            </a>
            <a className="nav-link-cta" href="#contact">
              CONTACT US
            </a>
          </div>
        </div>
        <div className="cta">
          <motion.div
            animate={{ y: [0, -40, -30] }}
            transition={{ ease: "easeIn", duration: 3 }}
            className="cta-text"
          >
            <span>flexible,</span>
            <br></br>
            COMPREHENSIVE SERVICES
          </motion.div>
          <a className="cta-link" href="#contact">
            LEARN MORE
            <img className="cta-asset" src={CTAAsset} alt="" width="50px" />
          </a>
        </div>
        <Rocket className="rocket animated" />
      </div>
    );
}

export default Hero
