import styled from "styled-components";

export const StyledGamePage = styled.main`
  min-height: calc(100vh - 22rem);
  margin-top: 12rem;
  padding: 2rem;
  width: 100%;
  .brief-overview {
    display: flex;
    width: 100%;
    gap: 2rem;
  }
  .extra-content {
    width: 70%;
  }
  @media only screen and (max-width: 950px) {
    .brief-overview {
      flex-direction: column;
    }
    .extra-content {
      width: 100%;
    }
  }
  @media only screen and (max-width: 780px) {
    min-height: calc(100vh - 18rem);
    margin-top: 9rem;
    padding: 1rem;
  }
`;
