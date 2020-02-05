import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import Participants from './Participants'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders Participants', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Participants />
      </ThemeProvider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
