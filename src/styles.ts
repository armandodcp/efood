import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#000',
  creme: '#fff8f2',
  pessego: '#ffebd9',
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
    background-color: ${cores.creme};
    color: ${cores.coral};
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
