import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family: YuGo, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    touch-action: manipulation;
    background: #fff;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
    -webkit-touch-callout: none; 
  }

  a {
    text-decoration: none;
    display: block;
  }

  html {
    font-family: $fonts;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    position: relative;
    width: 100%;
    touch-action: manipulation;
  }

  img {
    width: auto;
    height: auto;
  }

  a {
    cursor: pointer;
}
`;

export default GlobalStyle;
