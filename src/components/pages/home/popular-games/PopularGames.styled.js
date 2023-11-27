import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPopularGames = styled(motion.section)`
  margin-top: 5rem;
  width: 100%;

  h1 {
    margin-bottom: 2rem;
    span {
      display: inline-block;
    }
  }
  .popular-games {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .popular-game {
    width: 100%;
  }
  .game-img-container {
    width: 100%;
    height: 13.5rem;
    /* height: calc((9 * width) / 16); */
  }
  @media only screen and (max-width: 780px) {
    .popular-games {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .popular-game {
      min-width: 16rem;
    }
  }
`;
