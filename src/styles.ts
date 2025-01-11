import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  cream: '#fff8f2',
  peach: '#ffebd9',
  coral: '#e66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.cream};
    color: ${colors.coral};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 16px;
    }
  }
`
