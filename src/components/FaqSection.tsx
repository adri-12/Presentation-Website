import styled from "styled-components";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animations";
import { motion } from "framer-motion";
import { scrollReveal } from "../animations";
const FaqSection = () => {
  const { element, controls } = useScroll();
  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              expedita!
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Scheldule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              expedita!
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              expedita!
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              expedita!
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;
export default FaqSection;
