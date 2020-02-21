import React from 'react'
import { connect } from 'react-redux'

import { ChatAppRoot, Header, Error } from './ChatApp.shards'

import Tabs from '../Tabs/Tabs'

const ConnectedChatApp = ({ title = 'Status meeting standup', error }) => (
  <ChatAppRoot>
    {error && <Error>{error}</Error>}
    <Header>{title}</Header>
    <Tabs />
  </ChatAppRoot>
)

const ChatApp = connect(
  state => ({
    error: state.error.text
  })
)(ConnectedChatApp)

export default ChatApp
