import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'

import App from './App'

expect.addSnapshotSerializer(serializer)

describe('renders app', () => {
  it('Snapshot', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
