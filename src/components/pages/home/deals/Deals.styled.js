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
  }
`;
