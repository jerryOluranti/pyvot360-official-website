import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

     React.useEffect(() => {
       if (inView) {
         controls.start("visible");
       } else {
         controls.start("hidden");
       }
     }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="service-card"
      >
        <div className="service-pip">
          <i className="service-icon ri-menu-fill"></i>
        </div>
        <div className="service-details">Web Development</div>
        <div className="service-desc">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Hic, illo earum! Nihil,
          esse tempore facilis corrupti.
        </div>
      </motion.div>
    );
}

export default Services
