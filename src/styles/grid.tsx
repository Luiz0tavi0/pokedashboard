import styled from "styled-components";

export const StyledGridBox = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white20};
  border: 1px solid ${({ theme: { colors } }) => colors.gray15};
  border-radius: 25px;
  padding: 2rem 2.5rem;
  @media screen and (max-width: 550px) {
    padding: 1.5rem;
  }
`;

export default StyledGridBox;
