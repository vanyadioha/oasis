import { styled } from "styled-components";

export const StyledGameSeries = styled.section`
  margin-top: 5rem;
  h2 {
    margin-bottom: 2rem;
  }
  .series-games {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .series-game {
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  .game-img-container {
    width: 100%;
    height: 13.5rem;
  }
  @media only screen and (max-width: 780px) {
    .series-games {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .series-game {
      min-width: 16rem;
    }
  }
`;
