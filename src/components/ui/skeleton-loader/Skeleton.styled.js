import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledSkeleton = styled(motion.div)`
  width: ${(p) => p.w};
  height: ${(p) => p.h};
  background-color: var(--bg-secondary);
  overflow: hidden;
  border-radius: ${(p) => p.br};
  div {
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent, #000000cc);
  }
`;
