import React from 'react';
// images
import Image from '../assets/vamb33g.png';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section
      className=" lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[80px]"
            >
            <br />
              Fabian Schmidt <span></span>
            </motion.h1>
            
            <br />
            <br />
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am </span>
              <TypeAnimation
                sequence={[
                  'A Fullstack Web Developer',
                  3000,
                  'An Autodidact',
                  2000,
                ]}
                speed={50}
                className="text-gradient1"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <p>Frontend : React (redux, typescript)</p>
              <p>Backend : NodeJS </p>
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" className="text-gradient btn-link cursor-pointer">
                Contact me
              </Link>
              <br />
              <Link to="work" className="text-gradient btn-link cursor-pointer">
                My Projects
              </Link>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            ></motion.div>
          </div>
          <br />
          {/* image */}
          {/* <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-auto max-w-[352px] lg:max-w-[530px]"
          >
            <img src={Image} alt="" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
