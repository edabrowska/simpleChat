import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ParticipantTile from './ParticipantTile'

import theme from '../../styles/theme/theme'
import initialState from '../../../__mocks__/fileMock'

expect.addSnapshotSerializer(serializer)

describe('renders ParticipantTile', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()
    const mockData = initialState.participants.participantsList[0].name

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <ThemeProvider theme={theme}>
          <ParticipantTile name={mockData} />
        </ThemeProvider>
      </Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
