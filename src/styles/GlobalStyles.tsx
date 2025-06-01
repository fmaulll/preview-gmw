import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary-color: #8B4513;
        --secondary-color: #D2691E;
        --accent-color: #DEB887;
        --background-dark: #2C1810;
        --text-light: #F5DEB3;
        --text-dark: #1a0f0a;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', sans-serif;
        background: var(--background-dark);
        color: var(--text-light);
        line-height: 1.5;
      }

      button {
        cursor: pointer;
        border: none;
        outline: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles; 