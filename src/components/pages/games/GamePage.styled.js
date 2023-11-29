import styled from "styled-components";

export const StyledGamePage = styled.div`
  min-height: calc(100vh - 22rem);
  margin-top: 12rem;
  padding: 2rem;
  @media only screen and (max-width: 780px) {
    min-height: calc(100vh - 18rem);
    margin-top: 9rem;
    padding: 1rem;
  }
`;
