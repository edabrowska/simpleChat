import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import Input from './Input'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders Input', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Input
          handleSubmit={() => { }}
          id={0}
          value='text'
          placeholder='Type in...'
          handleChange={() => { }}
        />
      </ThemeProvider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
