import styled from "styled-components";

export const StyledGameCard = styled.li`
  img {
    height: 100%;
    border-radius: 20px;
    max-height: 150px;
    max-width: 366px;
  }
  h3 {
    margin-top: 1rem;
  }
  @media screen and (max-width: 1000px) {
    border-radius: 20px;
  }
`;
