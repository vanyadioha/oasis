import { styled } from "styled-components";

export const StyledError = styled.div`
  width: 100%;
  height: 20rem;
  background-color: red;
  display: grid;
  place-items: center;
  background-color: var(--bg-secondary);
  border: 0.1rem solid var(--text-secondary);
  border-radius: 2rem;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    color: var(--text-secondary);
  }
`;
