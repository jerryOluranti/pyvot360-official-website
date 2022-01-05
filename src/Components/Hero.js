import React from 'react'

import '../styles/Hero.css'
import '../styles/rocket-animation.css'
import LogoSvg from '../assets/logo-white-horizontal.svg'
import {ReactComponent as Rocket} from '../assets/rocket.svg'
import CTAAsset from '../assets/triangle-asset-orange.svg'

import { motion } from 'framer-motion'

function Hero() {

  const [ active, setActive ] = React.useState('');

    return (
      <div className="hero-container" id="home">
        <div className="hero-header">
          <motion.img
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.8 }}
            src={LogoSvg}
            alt=""
            width="17%"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            className={`hero-nav-links ${active}`}
          >
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
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            className="burger"
            onClick={() => {
              if (active === "" || active === "hidden") {
                setActive("active");
              } else {
                setActive("out");
                setTimeout(() => setActive("hidden"), 3000);
              }
            }}
          >
            {active === "" || active === "hidden" ? (
              <i className="ri-menu-3-line"></i>
            ) : (
              <i className="ri-close-fill"></i>
            )}
          </motion.div>
        </div>
        <div className="hero-body">
          <motion.div
              animate={{ y: [0, -50, -25], opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 3 }}
             className="cta">
            <div className="cta-text">
              <div className="span">flexible,</div>
              <div className="span-big">COMPREHENSIVE SERVICES</div>
            </div>
            <a className="cta-link" href="#contact">
              LEARN MORE
              <img className="cta-asset" src={CTAAsset} alt="" width="10%" />
            </a>
          </motion.div>
          <Rocket className="rocket animated" />
        </div>
      </div>
    );
}

export default Hero
