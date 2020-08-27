import { createGlobalStyle, css } from 'styled-components';
import { Theme } from '.';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;
    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
    }
    #root {
      background: ${Theme.colors.background};
      color: ${Theme.colors.honeyDew};
      display: flex;
      font-family: sans-serif;
      height: 100%;
      justify-content: center;
      padding: 15px;
    }
  }
`}
  `;
