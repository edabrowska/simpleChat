import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import ChatApp from './ChatApp'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders ChatApp', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
