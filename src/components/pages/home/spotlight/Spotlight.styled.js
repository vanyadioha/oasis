import styled from "styled-components";

export const StyledSpotlight = styled.section`
  margin-top: 5rem;
  .spotlight-h1 {
    margin-bottom: 2rem;
    span {
      display: inline-block;
    }
  }
  .sony-games {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
  .sony-game {
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  .game-img-container {
    width: 100%;
    height: 13.5rem;
  }
  .spidey2 {
    margin-top: 5rem;
    height: 28rem;
    background: linear-gradient(to right, transparent, transparent),
      url("./assets/spotlight/spidey2.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 2rem;
    button {
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      right: 10%;
      width: 15rem;
      padding: 2rem;
      border: none;
      outline: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .spidey2 {
      background-size: contain;
    }
  }
  @media only screen and (max-width: 780px) {
    .sony-games {
      display: flex;
      overflow: scroll;
      padding: 1rem 0;
    }
    .sony-game {
      min-width: 16rem;
    }
    .spidey2 {
      background: linear-gradient(to right, transparent, transparent),
        url("./assets/spotlight/spidey2mobile.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      button {
        display: none;
      }
    }
    .spidey-txt {
      color: var(--text-secondary);
      margin: 1rem 0;
    }
    .spidey-price {
      margin-top: 1rem;
      font-size: 2rem;
    }
  }
`;
