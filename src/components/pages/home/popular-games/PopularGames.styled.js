import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPopularGames = styled(motion.section)`
  margin-top: 2rem;
  h1 {
    margin-bottom: 2rem;
  }
  .popular-games {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .popular-game {
    background-color: gray;
    width: 100%;
  }
  .game-img-container {
    width: 100%;
    height: 13.5rem;
    /* height: calc((9 * width) / 16); */
    img {
      object-position: top;
    }
  }
`;
