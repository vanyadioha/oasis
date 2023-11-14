import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledNavbar = styled(motion.nav)`
  width: 100%;
  height: 7rem;
  padding: 0 2rem;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  a {
    height: 100%;
  }
  button {
    height: 100%;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border: none;
    outline: none;
    &:hover {
      outline: none;
    }
  }
  .navbar-left,
  .navbar-right {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .navbar-left {
  }
  .nav-logo {
    height: 5rem;
    width: 5rem;
  }
  .burger-button {
    display: none;
    z-index: 11;
    background-color: var(--bg-secondary);
  }
  .burger {
    font-size: 1rem;
  }
  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: var(--text-primary);
  }

  //Responsive
  @media only screen and (max-width: 780px) {
    a {
      display: none;
    }
    .burger-button {
      display: block;
    }
  }
`;
