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
  @media only screen and (max-width: 1320px) {
    padding: 2rem 5rem;
    .inner-layout {
      width: calc(100vw - 10rem);
    }
  }
  @media only screen and (max-width: 780px) {
    padding: 2rem;
    .inner-layout {
      width: calc(100vw - 4rem);
    }
  }
`;
