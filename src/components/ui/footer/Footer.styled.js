import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledFooter = styled(motion.footer)`
  width: 100vw;
  padding: 2rem;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  text-align: center;
  p {
    a {
      text-decoration: underline;
    }
  }
`;
