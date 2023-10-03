import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledCarousel = styled(motion.div)`
  margin-top: 2rem;
  width: 100%;
  height: 60rem;
  display: flex;
  gap: 2rem;
  .carousel,
  .flickity {
    height: 100%;
    border-radius: 2rem;
  }
  .carousel {
    width: 80%;
    background-color: var(--bg-secondary);
  }
  .frame {
  }
  .flickity {
    width: 20%;
    z-index: 5;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledFrame = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: linear-gradient(#00000088, #00000088), url(${(p) => p.wp});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

export const StyledFlickity = styled(motion.li)`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: ${(p) => p.bgActive && "var(--bg-secondary)"};
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  .flickity-logo {
    height: 5rem;
    width: 5rem;
    background: linear-gradient(#00000088, #00000088), url(${(p) => p.wp});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0.4rem;
    img {
      object-fit: contain;
    }
  }
  .flickity-range {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(p) => p.bgActive && "#ffffff11"};
  }
`;
