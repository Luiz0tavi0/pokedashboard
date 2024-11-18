import styled from "styled-components";

export const StyledBanner = styled.div`
  padding: 1rem 2.5rem;
  background: rgb(90, 11, 11);
  background: radial-gradient(
    circle,
    rgba(90, 11, 11, 1) 60%,
    rgba(42, 2, 2, 0.9025735294117647) 100%
  );

  .flexGrid {
    display: flex;
    align-items: center;
    gap: 4rem;
    justify-content: space-between;
  }
  h1 {
    margin-bottom: 1rem;
  }
  .content {
    min-width: 270px;
    h1 {
      margin-top: 1rem;
    }
  }
  .imageGrid {
    img {
      max-width: 100%;
    }
  }
  .priceBox {
    margin-top: 3rem;
    display: inline-flex;
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.white20};
    border-radius: 12px;
    p {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.5rem;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    .flexGrid {
      flex-direction: column-reverse;
    }
    .content {
      min-width: unset;
      h1 {
        margin-top: 0.5rem;
      }
    }
    .imageGrid {
      img {
        width: 100%;
        max-width: 335px;
      }
    }
    .priceBox {
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 400px) {
    .priceBox {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;
