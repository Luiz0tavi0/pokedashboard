import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    box-sizing: border-box;
    background-color:black;
  }
  button{
    cursor: pointer;
    border: none;
    background: transparent;
  }
  ul, ol{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li{
    list-style:none;
  }
  img{
    width: 100%;
  }
`;
export const ColorsTheme = {
  colors: {
    white: "#FFF",
    white20: "rgba(217, 217, 217, 0.15)",
    white50: "rgba(255, 255, 255, 0.5)",
    gray15: "rgba(217, 217, 217, 0.15)",
    red: "#F55859",
    blue: "#0F81EC",
  },
};
