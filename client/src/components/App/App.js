import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyles from '../../styles/global'
import theme from '../../styles/theme/theme'

import { Root } from './App.shards'

function App() {
  return (
    <>
      <Global
        styles={globalStyles}
      />
      <ThemeProvider theme={theme}>
        <Root>
          asd
        </Root>
      </ThemeProvider>
    </>
  )
}

export default App
