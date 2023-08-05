import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledMenu = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 80vw;
  max-width: 40rem;
  background-color: var(--bg-secondary);
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  .menu-top,
  .menu-bottom {
    display: flex;
    width: 100%;
    button {
      padding: 1.5rem;
      background-color: inherit;
      border: none;
      width: 100%;
      color: var(--text-primary);
    }
  }
  .menu-top {
    flex-direction: column;
    button {
      text-align: left;
    }
  }
  .menu-bottom {
    a {
      width: 50%;
    }
    .sign-in {
      border-right: 0.1rem solid grey;
    }
    .sign-up {
      border-left: 0.1rem solid grey;
    }
  }
`;
