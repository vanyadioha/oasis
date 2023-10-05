import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledCarousel = styled(motion.div)`
  margin-top: 2rem;
  width: 100%;
  height: 60rem;
  display: flex;
  gap: 2rem;
  position: relative;
  .carousel,
  .flickity {
    height: 100%;
  }
  .carousel {
    width: 80%;
    background-color: var(--bg-secondary);
    border-radius: 2rem;
  }
  .frame {
  }
  .flickity {
    width: 20%;
    z-index: 2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--bg-primary);
  }
  @media only screen and (max-width: 1320px) {
    .carousel {
      width: 100%;
    }
    .flickity {
      flex-direction: row;
      height: 3rem;
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem;
      border-radius: 10rem;
      align-items: center;
      padding: 1.5rem;
      width: auto;
      gap: 2rem;
    }
  }
  @media only screen and (max-width: 780px) {
    .carousel {
      overflow: hidden;
    }
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
  @media only screen and (max-width: 1320px) {
    .carousel-info {
      padding: 5rem 5rem 0;
    }
    button {
      &.wishlist-btn {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 780px) {
    button {
      display: none;
    }
    .carousel-img {
      width: 50%;
      height: 100%;
      left: 0;
      top: 40%;
      &.img-4 {
        top: 20%;
      }
      img {
        object-fit: contain;
        object-position: center;
      }
    }
    .carousel-info {
      padding: 2rem;
      width: 100%;
      position: absolute;
      text-align: center;
    }
    .carousel-logo {
      height: 30%;
      width: 100%;
      padding: 0;
      margin-bottom: 2rem;
      img {
        object-position: center;
      }
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
  @media only screen and (max-width: 1320px) {
    padding: 0;
    background-color: var(--bg-secondary);
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 10rem;
    .flickity-logo,
    .flickity-range,
    p {
      display: none;
    }
  }
  @media only screen and (max-width: 780px) {
  }
`;
