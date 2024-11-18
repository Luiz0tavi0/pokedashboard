import styled from "styled-components";

export const StyledGameList = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    min-width: 260px;
  }

  @media screen and (max-width: 830px) {
    overflow-x: auto;
    padding-bottom: 1rem;
  }

  /* Standard scrollbar styles (fallback for non-WebKit browsers) */
  scrollbar-width: thin; /* Firefox, Safari */
  scrollbar-color: ${({ theme: { colors } }) => colors.red} transparent; /* Firefox, Safari */

  /* WebKit-specific scrollbar styles (with fallbacks for older WebKit versions) */
  &::-webkit-scrollbar {
    height: 8px !important;

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme: { colors } }) => colors.red} !important;

      /* Handle hover (optional, for better user experience) */
      &:hover {
        background: ${({ theme: { colors } }) =>
          colors.red + "80"} !important; /* Slightly darker on hover */
      }
    }

    /* Track (optional, for better user experience) */
    &::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }
  }
`;
