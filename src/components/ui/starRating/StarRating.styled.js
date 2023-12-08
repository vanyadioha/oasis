import { styled } from "styled-components";

export const StyledStarRatings = styled.div`
  .half-star-container {
    display: inline-flex;
    position: relative;
  }
  .inner-star {
    position: absolute;
    overflow: hidden;
    width: ${(p) => `${p.dec * 100}%`};
  }
`;
