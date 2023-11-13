import { styled } from "styled-components";

export const StyledDeals = styled.section`
  width: 100%;
  margin-top: 2rem;
  .deals-h1 {
    margin-bottom: 2rem;
  }
  .deals-container {
    width: 100%;
    height: 45rem;
    display: flex;
    justify-content: space-between;
  }
  .deal-container {
    width: 23%;
    height: 45rem;
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
  }
  .deal-img-container {
    width: 100%;
    height: 100%;
  }
  .deal-txt {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    background: linear-gradient(to top, #000, #000000bb, #00000000);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    opacity: 1;
  }
  .deal-prices {
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    span {
      display: inline-block;
      padding: 1rem;
      background-color: var(--bg-secondary);
      border-radius: 0.7rem;
    }
  }
  .explore-container {
    margin-top: 2rem;
    height: 50rem;
    background: linear-gradient(to right, #000000aa, #000000aa),
      url("./assets/deals/wp2.JPG");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    border-radius: 2rem;
  }
  .explore-games-container,
  .explore-txt {
    flex-basis: 50%;
    display: grid;
    place-items: center;
  }
  .explore-txt {
    text-align: center;
    color: #b4b4b4;
    h1 {
      font-size: 8vw;
    }
    h2 {
      font-size: 4vw;
      margin-bottom: 3rem;
    }
    button {
      padding: 2rem;
      width: 40%;
      background-color: turquoise;
      border: none;
      outline: none;
      font-size: 2rem;
      border-radius: 1rem;
    }
  }
  .explore-games-container {
    /* background-color: blue; */
  }
  .explore-games {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 1.5rem;
  }
  .explore-game {
    width: 12rem;
    height: 18rem;
  }
  .campaign-section {
    margin-top: 2rem;
  }
  .explore-campaigns {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .explore-campaign {
    flex-basis: 30%;
  }
  .campaign-h1 {
    font-size: 2rem;
  }
  .campaign-p {
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 780px) {
    .deals-container {
      height: 30rem;
      justify-content: unset;
      gap: 2rem;
      overflow: scroll;
    }
    .deal-container {
      min-width: 20rem;
      height: 100%;
    }
    .deal-txt {
      padding: 1rem;
    }
    .explore-container {
      flex-direction: column-reverse;
      height: auto;
      padding: 5rem 0;
      gap: 5rem;
      background: linear-gradient(to top, #000000dd, #00000077),
        url("./assets/deals/wp2.JPG");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .explore-txt {
      h1 {
        font-size: 14vw;
      }
      h2 {
        font-size: 5vw;
      }
      button {
        padding: 1.5rem;
        width: 60%;
      }
    }
    .explore-campaigns {
      flex-direction: column;
      gap: 3rem;
    }
    .campaign-p {
      margin-top: 1rem;
    }
  }
`;
