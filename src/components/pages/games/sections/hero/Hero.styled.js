import { styled } from "styled-components";

export const StyledHero = styled.section`
  flex-basis: 75%;
  .title-info,
  .ratings {
    display: flex;
    gap: 2rem;
    align-items: end;
    margin-bottom: 2rem;
  }
  .carousel {
    margin-bottom: 2rem;
  }
  .flickity {
    width: 100%;
    position: relative;
    height: 8rem;
    margin-bottom: 2rem;
  }
  .flickity-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
  }
`;
