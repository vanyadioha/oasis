import { styled } from "styled-components";

export const StyledRatings = styled.section`
  margin-top: 5rem;
  h1 {
    margin: 2rem 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 450px) {
    .container {
      overflow: scroll;
      justify-content: start;
      gap: 5rem;
    }
    div {
      min-width: 18rem;
    }
  }
`;
