import styled, { css } from "styled-components";
import BaseTitle, { IFontSizeTypes } from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: "Poppins", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme.colors.white};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 44px;
          @media screen and (max-width: 800px) {
            font-size: 36px;
          }
          @media screen and (max-width: 420px) {
            font-size: 32px;
          }
        `;
      case "md":
        return css`
          font-size: 20px;
        `;
      case "slg":
        return css`
          font-size: 24px;
        `;
      case "sm":
        return css`
          font-size: 16 px;
        `;
    }
  }};
`;

interface iStyledParagraph extends IFontSizeTypes {
  opacity?: number;
  $customFontSize?: string;
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  font-family: "Poppins", sans-serif;
  opacity: ${({ opacity }) => (opacity ? opacity : 0.5)};
  color: ${({ theme }) => theme.colors.white};
  strong,
  b {
    font-weight: 700;
  }
  font-weight: 400;
  ${({ $customFontSize, fontSize }) => {
    if ($customFontSize) {
      return css`
        font-size: ${$customFontSize};
      `;
    }

    switch (fontSize) {
      case "lg":
        return css`
          font-size: 20px;
        `;
      case "slg":
        return css`
          font-size: 24px;
        `;
      case "md":
        return css`
          font-size: 16px;
        `;
      case "sm":
        return css`
          font-size: 14px;
        `;
      default:
        return css`
          font-size: inherit;
        `;
    }
  }}
`;
interface iStyledTagProps {
  $backgroundColor: "blue" | "red";
}
export const StyledTag = styled.span<iStyledTagProps>`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34;
  padding: 0 1.5rem;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  ${({ theme: { colors }, $backgroundColor }) => {
    switch ($backgroundColor) {
      case "blue":
        return css`
          background-color: ${colors.blue};
        `;
      case "red":
        return css`
          background-color: ${colors.red};
        `;
    }
  }};
`;
