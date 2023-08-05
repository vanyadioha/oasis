import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledMenuBar = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  .search-bar {
    padding: 1rem;
    width: 25rem;
    border-radius: 99rem;
    border: none;
    background-color: var(--bg-secondary);
  }
  .search-icon {
    display: none;
  }
`;
