import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  :root {
    --text-color: #2C2D2E;
    --text-color-secondary: #919399;
    --primary-color: #005FF9;
    --default-border: 1px solid rgba(0, 16, 61, 0.12);
  }

  html,
  body,
  #__next {
    height: 100%;
    box-sizing: border-box;
  }
  body * {
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: var(--text-color);
  }
`;
