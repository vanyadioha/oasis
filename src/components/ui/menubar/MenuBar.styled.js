import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledMenuBar = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 3;
  position: fixed;
  top: 7rem;
  background-color: var(--bg-primary);
  padding: 2rem 0;
  .search-layout {
    position: relative;
    width: 30%;
  }
  .search-bar {
    height: 3rem;
    padding-left: 3.3rem;
    width: 100%;
    border-radius: 99rem;
    border: none;
    outline: none;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
  }
  .search-icon {
    height: 2.9rem;
    width: 2.9rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: inherit;
    color: var(--text-secondary);
  }
  .menu-options {
    display: flex;
    gap: 5rem;
  }

  .menu-drawer {
    display: none;
    background-color: inherit;
    color: var(--text-secondary);
    border: none;
    outline: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  //Responsive
  @media only screen and (max-width: 780px) {
    padding: 1rem;
    height: 4rem;
    margin-left: -2rem;
    .search-layout {
      width: 100%;
      z-index: 2;
    }
    .search-bar {
      border-radius: 0;
    }
    .search-icon {
    }
    .menu-options {
      position: absolute;
      width: 100%;
      text-align: center;
      gap: 0;
      padding: 1rem;
      z-index: 2;
      top: 4rem;
      flex-direction: column;
      background-color: var(--bg-secondary);
      margin-left: -1rem;
    }
    .menu-option {
      padding: 1.5rem;
      &:not(.menu-option:last-child) {
        border-bottom: 0.1rem solid #2a2a2a;
      }
    }

    .menu-drawer {
      display: flex;
      gap: 1rem;
      align-items: center;
      height: 3rem;
    }
  }
`;
