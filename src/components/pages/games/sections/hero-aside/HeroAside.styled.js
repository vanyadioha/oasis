import { styled } from "styled-components";

export const StyledHeroAside = styled.aside`
  flex-basis: 25%;
  padding: 10rem 1rem 0;
  .game-details {
    margin-bottom: 2rem;
  }
  .game-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    &:not(:last-child) {
      border-bottom: 0.2rem solid var(--bg-secondary);
    }
    p:last-child {
      flex-basis: 50%;
      text-align: right;
    }
  }
  .checkout-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    button {
      padding: 1.2rem;
      border: 0.2rem solid var(--text-secondary);
      border-radius: 1rem;
      background-color: transparent;
      color: var(--text-primary);
      &:first-child {
        background-color: #273cff;
        border: none;
      }
      &:last-child {
        padding: 1rem;
      }
    }
  }
  .price {
    margin-bottom: 2rem;
    h1 {
      font-size: 5rem;
    }
  }
`;
