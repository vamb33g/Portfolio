import React from 'react';
// images
import Logo from '../assets/logo.svg';
//icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// variants
import { fadeIn } from '../variants';
//motion
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="py-8 flex-grow justify-center">
      <div className="container mx-auto">
        {/* social */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0"
        >
        {/* <img src={Logo} alt="" /> */}
          <a href="https://www.linkedin.com/in/vamb33g" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Vai-1337" target="_blank">
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
