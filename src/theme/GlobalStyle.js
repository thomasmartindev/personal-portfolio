import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    transition: background-color 200ms;
  }

  h1 {
    font-size: 100%;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.background};
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-size: 1.6rem;
    outline: none;
    padding: 1rem;
    width: 500px;

    @media (max-width: 840px) {
      font-size: 1.4rem;
      width: 100%
    }
  }

  textarea {
    height: 300px;
    resize: none;
  }
`