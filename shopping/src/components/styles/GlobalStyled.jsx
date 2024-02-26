import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffff;
    color: #333;

  }
  p{
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  /* Add more global styles as needed */
`;

export default GlobalStyle;
