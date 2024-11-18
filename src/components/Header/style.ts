import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    button {
      color: ${({ theme: { colors } }) => colors.white};
      transition: color 0.4s ease;

      &:hover {
        color: ${({ theme: { colors } }) => colors.blue};
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    .userMenu {
      width: 100%;
      justify-content: flex-end;
    }
  }
`;
export const StyledHeaderForm = styled.form`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  height: 59px;
  background-color: ${({ theme: { colors } }) => colors.white20};
  border-radius: 10px;

  input {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    background-color: transparent;
    width: 100%;
    max-width: 376px;

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.white50};
    }
  }

  button {
    color: ${({ theme: { colors } }) => colors.white50};
    transition: color 0.4s ease;

    &:hover {
      color: ${({ theme: { colors } }) => colors.white};
    }
  }

  @media screen and (max-width: 600px) {
    input {
      height: 52px;
    }
  }
`;
