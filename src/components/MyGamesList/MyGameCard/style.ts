import styled from "styled-components";

export const StyledMyGameCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    img {
      width: 85px;
      height: 85px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 2rem;
    & button {
      min-width: 150px;
    }
  }
  @media screen and (max-width: 850px) {
    .right {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
  @media screen and (max-width: 550px) {
    align-items: flex-start;
    flex-direction: column;

    .right {
      width: 100%;
      align-items: center;

      button {
        max-width: 420px;
        width: 100%;
      }
    }
  }
`;

export default StyledMyGameCard;
