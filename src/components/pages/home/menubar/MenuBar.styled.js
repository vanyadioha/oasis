import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledMenuBar = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  color: var(--text-primary);
  .search-bar {
    padding: 1rem;
    width: 25rem;
    border-radius: 99rem;
    border: none;
    outline: none;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
  }
  .search-icon {
    display: none;
  }
  //Responsive
  @media only screen and (max-width: 780px) {
    .search-layout {
      position: relative;
    }
    .search-bar {
      display: none;
    }
    .search-icon {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
