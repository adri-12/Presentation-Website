import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animations";
import Wave from "./Wave";
import { About, Description, Image, Hide } from "../pages/styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
              aliquid.
            </motion.p>
          </Hide>
        </motion.div>
        <motion.button variants={fade}>Contact me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
