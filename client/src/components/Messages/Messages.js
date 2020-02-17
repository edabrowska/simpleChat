import React, { useState } from 'react'
import { connect } from 'react-redux'

import { MessagesRoot } from './Messages.shards'

import ChatMessage from '../ChatMessage/ChatMessage'
import Input from '../Input/Input'

import { addMessage } from '../../store/actions'

const ConnectedMessages = ({
  getParticipantName = [],
  getMessages = [],
  addMessage,
}) => {
  const [text, setText] = useState({
    name: '',
    message: '',
    id: 0
  })

  const handleChange = event => {
    setText({
      name: getParticipantName[0].name,
      message: event.target.value,
      id: text.id
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addMessage(text)
    setText({
      name: getParticipantName[0].name,
      message: '',
      id: text.id + 1
    })
  }

  return <MessagesRoot>
    <div>
      {getMessages.map((message, index) => <ChatMessage
        key={index}
        text={message.message}
        name={message.name}
      />)}
    </div>
    <Input
      handleSubmit={handleSubmit}
      placeholder='Message'
      id='message'
      value={text.message}
      handleChange={handleChange}
    />
  </MessagesRoot>
}

const Messages = connect(
  state => ({
    getParticipantName: state.participants.participantsList,
    getMessages: state.messages.messagesList
  }),
  dispatch => ({
    addMessage: (text) => dispatch(addMessage(text))
  })
)(ConnectedMessages)

export default Messages
