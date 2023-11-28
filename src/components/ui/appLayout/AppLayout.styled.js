import { styled } from "styled-components";

export const StyledAppLayout = styled.main`
  width: 100vw;
  display: grid;
  place-items: center;
  padding: 2rem 10rem;
  background-color: var(--bg-primary);
  .inner-layout {
    width: calc(100vw - 20rem);
    max-width: 144rem;
  }
  #to-top {
    position: fixed;
    bottom: 5rem;
    right: 10rem;
    z-index: 2;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: var(--text-secondary);
    border: none;
  }
  @media only screen and (max-width: 1320px) {
    padding: 2rem 5rem;
    .inner-layout {
      width: calc(100vw - 10rem);
    }
    #to-top {
      right: 5rem;
    }
  }
  @media only screen and (max-width: 780px) {
    padding: 2rem;
    .inner-layout {
      width: calc(100vw - 4rem);
    }
    #to-top {
      right: 3rem;
      bottom: 3rem;
      height: 5rem;
      width: 5rem;
    }
  }
`;
