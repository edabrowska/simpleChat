import React from 'react'

import { ChatAppRoot, Header } from './ChatApp.shards'

import Tabs from '../Tabs/Tabs'

const ChatApp = ({ title = 'Status meeting standup' }) => <ChatAppRoot>
  <Header>{title}</Header>
  <Tabs />
</ChatAppRoot>

export default ChatApp
