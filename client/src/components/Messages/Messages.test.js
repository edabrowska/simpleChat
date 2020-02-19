import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Messages from './Messages'

import theme from '../../styles/theme/theme'
import initialState from '../../../__mocks__/fileMock'

expect.addSnapshotSerializer(serializer)

describe('renders Messages', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()
    const mockData = {
      getMessages: initialState.messages.messagesList,
      getUser: initialState.user.details
    }

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <ThemeProvider theme={theme}>
          <Messages getMessages={mockData.getMessages} getUser={mockData.getUser} />
        </ThemeProvider>
      </Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
