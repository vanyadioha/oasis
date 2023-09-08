import { styled } from "styled-components";

export const StyledAppLayout = styled.main`
  width: 100vw;
  display: grid;
  place-items: center;
  padding: 2rem 10rem;
  background-color: var(--bg-primary);
  .inner-layout {
    width: 100%;
    max-width: 144rem;
  }
  @media only screen and (max-width: 780px) {
    padding: 2rem;
  }
`;
