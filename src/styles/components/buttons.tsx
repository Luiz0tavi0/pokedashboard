import styled, { css } from "styled-components";

interface iStyledButtonProps {
  $buttonSize: "lg" | "md" | "sm";
  $buttonStyle: "solid" | "outline";
}

export const StyledIconLInk = styled.button`
  width: 35px;
  min-width: 35px;
  height: 35px;
  opacity: 0.5;
  color: ${({ theme: { colors } }) => colors.white};
  transition-property: opacity;
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
`;

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  transition: box-shadow 0.4s ease;
  transition: filter 0.4s ease;

  border-radius: 12px;
  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case "lg":
        return css`
          padding: 0 2rem;
          height: 69px;
        `;
      case "md":
        return css`
          padding: 0 2rem;
          height: 46px;
        `;
      case "sm":
        return css`
          padding: 0 1.5rem;
          height: 42px;
        `;
    }
  }}
  ${({ $buttonStyle, theme }) => {
    switch ($buttonStyle) {
      case "solid":
        return css`
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        `;
      case "outline":
        return css`
          border: 1px solid ${theme.colors.blue};
          background-color: transparent;
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.blue};
          }
        `;
    }
  }}
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 25px 0 rgba(255, 249, 249, 0.25);
  }
`;
