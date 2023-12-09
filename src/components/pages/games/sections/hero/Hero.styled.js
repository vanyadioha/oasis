import { styled } from "styled-components";

export const StyledHero = styled.section`
  flex-basis: 75%;
  .title-info,
  .ratings {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;
  }
  .title-info {
    p {
      padding: 1rem;
      border-radius: 1rem;
      background-color: var(--bg-secondary);
    }
  }
  .ratings {
    p {
      padding: 1rem;
      border-radius: 1rem;
      background-color: var(--bg-secondary);
    }
  }
  .carousel {
    margin-bottom: 2rem;
  }
  .screenshot-container {
    height: 40.5rem;
    border-radius: 1rem;
    overflow: hidden;
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
  .flickity-img-container {
    border-radius: 1rem;
    overflow: hidden;
    &.active-shot {
      outline: 0.2rem solid var(--text-primary);
      outline-offset: 0.3rem;
    }
  }
`;
