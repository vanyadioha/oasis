import { styled } from "styled-components";

export const StyledExtras = styled.div`
  width: 70%;
  margin-top: 5rem;
  .genres-platforms {
    display: flex;
    div:first-child,
    div:last-child {
      flex-basis: 50%;
      padding-left: 3rem;
      border-left: 0.2rem solid var(--bg-secondary);
      h2 {
        color: var(--text-secondary);
      }
    }
  }
  .list {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    a {
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 950px) {
    width: 100%;
  }

  @media only screen and (max-width: 450px) {
    .genres-platforms {
      div:first-child,
      div:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`;
