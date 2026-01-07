import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Geist Mono', monospace;
    background-color: ${(props) => props.theme.colors.background};
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
   .price-font {
    font-family: 'JetBrains Mono', monospace;
    font-variant-numeric: tabular-nums;
  }
`;

export default GlobalStyles;
