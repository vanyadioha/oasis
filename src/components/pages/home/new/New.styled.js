import styled from "styled-components";

export const StyledNew = styled.section`
  margin-top: 5rem;
  .new-h1 {
    margin-bottom: 2rem;
    span {
      display: inline-block;
    }
  }
  .new-games {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .new-game {
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
    .new-games {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .new-game {
      min-width: 16rem;
    }
  }
`;

export const ImgFallback = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(p) => `#${p.bg}`};
  display: grid;
  place-items: center;
  font-size: 2rem;
`;
