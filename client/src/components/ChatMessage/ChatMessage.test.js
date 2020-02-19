import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ChatMessage from './ChatMessage'

import theme from '../../styles/theme/theme'
import initialState from '../../../__mocks__/fileMock'

expect.addSnapshotSerializer(serializer)

describe('renders ChatMessage', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()
    const mockData = {
      name: initialState.messages.messagesList[0].name,
      text: initialState.messages.messagesList[0].message,
      date: initialState.messages.messagesList[0].date
    }

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <ThemeProvider theme={theme}>
          <ChatMessage name={mockData.name} text={mockData.text} date={mockData.date} />
        </ThemeProvider>
      </Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
