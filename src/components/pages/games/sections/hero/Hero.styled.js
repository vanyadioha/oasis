import { styled } from "styled-components";

export const StyledHero = styled.section`
  flex-basis: 70%;
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
    border-radius: 1rem;
    overflow: hidden;
  }
  .flickity {
    width: 100%;
    height: 4.5rem;
    position: relative;
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
    height: 4.5rem;
    &.active-shot {
      outline: 0.2rem solid var(--text-primary);
      outline-offset: 0.3rem;
    }
  }
  .game-desc {
    height: 15rem;
    overflow: hidden;
    position: relative;
  }
  .embargo {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to top,
      var(--bg-primary),
      #191d20cc,
      #00000000
    );
    button {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem;
      width: 60%;
      max-width: 30rem;
      border: none;
      border-radius: 1rem;
      background-color: var(--text-secondary);
    }
  }
  @media only screen and (max-width: 950px) {
    flex-basis: auto;
  }
`;
