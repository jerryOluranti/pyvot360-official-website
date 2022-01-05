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
      <div className="about">
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ ease: "easeIn", duration: 2 }}
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
            transition={{ ease: "easeIn", duration: 2 }}
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
            transition={{ ease: "easeIn", duration: 3    }}
            className="about-body"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            expedita dolores sint minus esse. Laudantium sint cum vel quos
            beatae in libero doloremque natus, minus unde sapiente delectus
            nemo? Quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Possimus sed, dignissimos, deserunt eaque eos porro cumque
            soluta quae rem quidem dicta sapiente, odio quas reprehenderit dolor
            maxime eligendi est expedita?
          </motion.p>
        </div>
      </div>
    );
}

export default About
