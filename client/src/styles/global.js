import { css } from '@emotion/core'
import normalize from 'emotion-normalize'

import { text } from './theme/colors'

const base = css`
  * {
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; //== 10px (so that 1rem == 10px)
  }

  body {
    color: ${text.primary};
    font-size: 3rem;
    height: 100vh;
  }

  a {
    color: ${text.link};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: ${text.link};
      text-decoration: underline;
    }
  }

  p, ul, li {
    margin: 0;
  }
`

export default css`
  ${normalize}
  ${base}
`
