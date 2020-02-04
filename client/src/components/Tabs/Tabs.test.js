import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import Tabs from './Tabs'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders Tabs', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Tabs />
      </ThemeProvider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
