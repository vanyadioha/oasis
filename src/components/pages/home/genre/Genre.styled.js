import styled from "styled-components";

export const StyledGenres = styled.section`
  margin-top: 2rem;
  .genre-h1 {
    margin-bottom: 2rem;
  }
  .game-genres {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .game-genre {
    width: 100%;
  }
  .game-img-container {
    width: 100%;
    height: 13.5rem;
    position: relative;
  }
  .genre-txt {
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    padding: 4.5rem 2rem 0;
    background: linear-gradient(to top, #000, #000000bb, #00000000);
  }
  .browse-all {
    display: grid;
    place-items: center;
    background-color: var(--bg-secondary);
    border: 0.1rem solid var(--text-secondary);
  }
  @media only screen and (max-width: 780px) {
    .game-genres {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .game-genre {
      min-width: 16rem;
    }
  }
`;
