import { styled } from "styled-components";

export const StyledHeroAside = styled.aside`
  flex-basis: 25%;
  padding: 10rem 1rem 0;
  .game-details {
    margin-bottom: 2rem;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 0.2rem solid var(--bg-secondary);
      }
    }
  }
  .checkout-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .price {
    margin-bottom: 2rem;
  }
`;
