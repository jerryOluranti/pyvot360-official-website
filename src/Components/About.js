import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import '../styles/About.css'
import Asset from "../assets/about-asset.svg";

function About() {

    const controls = useAnimation();
    const [ ref, inView ] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }else {
            controls.start("hidden");
        }
     }, [inView, controls])

    return (
      <div className="about" id="about">
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ ease: "easeIn", duration: .5 }}
          src={Asset}
          alt=""
          className="about-asset"
        />
        <div className="section-header about-header">About Us</div>
        <div className="about-content">
          <motion.h2
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ ease: "easeIn", duration: .5 }}
            className="about-sub-header"
          >
            Who We Are
          </motion.h2>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ ease: "easeIn", duration: .5 }}
            className="about-body"
          >
            A company offering tech services and tech products to all and
            sundry. We are passionate about technology and we are committed to
            providing the best of services and products to all our
            clients. Founded in 2020, our team of qualified and experienced
            professionals have satisfied our customers with the best of services
            and products. Our uniqueness is in our ability to put our clients' needs above all; at all times.
          </motion.p>
        </div>
      </div>
    );
}

export default About
