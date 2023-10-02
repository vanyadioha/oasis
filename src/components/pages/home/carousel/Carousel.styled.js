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
    background-color: var(--bg-secondary);
    /* overflow: hidden; */
  }
  .frame {
  }
  .flickity {
    width: 20%;
    background-color: green;
    z-index: 5;
  }
`;

export const StyledFrame = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: linear-gradient(#00000088, #00000088), url(${(p) => p.wp});
  background-position: center;
  background-size: contain;
  position: relative;
  border-radius: 2rem;
  .carousel-img {
    height: 110%;
    width: 60%;
    position: absolute;
    right: -3rem;
    bottom: 0;
    img {
      object-fit: ${(p) => p.of};
      object-position: right;
    }
  }
  .carousel-info {
    width: 50%;
    height: 100%;
    padding: 18rem 5rem 0;
  }
  .carousel-logo {
    height: 50%;
    img {
      object-fit: contain;
    }
  }
  p {
    margin-bottom: 2rem;
  }
  button {
    padding: 1rem 3rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    &.cart-btn {
      background-color: var(--text-primary);
      color: var(--bg-primary);
    }
    &.wishlist-btn {
      background-color: transparent;
      color: var(--text-primary);
    }
  }
`;
