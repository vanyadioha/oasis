import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledCarousel = styled(motion.div)`
  margin-top: 2rem;
  width: 100%;
  height: 60rem;
  display: flex;
  .carousel,
  .flickity {
    height: 100%;
  }
  .carousel {
    width: 80%;
    border-radius: 2rem;
    background-color: blue;
    overflow: hidden;
  }
  .frame {
  }
  .flickity {
    width: 20%;
    background-color: green;
  }
`;

export const StyledFrame = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: aliceblue;
`;
