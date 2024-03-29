import React from "react";
// countup
import CountUp from "react-countup";
// intersection abserver
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import about from "../assets/vamb33g1.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="div container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-x20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[352px] lg:max-w-[530px]"
          >
            <img src={about} alt="" />
          </motion.div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-gradient1">About me.</h2>            
            <p className="mb-6">
              <br /> As a developer, I am passionate about continuous learning
              and strive to improve my technical skills. I am open to challenges
              and committed to finding effective solutions. 
             
              I am also aware of
              the importance of collaboration and communication in working
              effectively as a team. I always seek to enhance myself and acquire
              new skills to deliver quality solutions.
              I am autodidact and autonomous.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient1 mb-2 p-3">
                  {inView ? <CountUp start={0} end={30} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                className="text-gradient btn-link cursor-pointer"
              >
                Contact me
              </Link>
              <br />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
