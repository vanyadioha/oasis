import { styled } from "styled-components";

export const StyledDlcAndParent = styled.section`
  margin-top: 5rem;
  h2 {
    margin-bottom: 2rem;
  }
  .dlc-games {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .dlc-game {
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
    .dlc-games {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .dlc-game {
      min-width: 16rem;
    }
  }
`;
