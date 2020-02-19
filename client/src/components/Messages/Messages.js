import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { MessagesRoot } from './Messages.shards'

import ChatMessage from '../ChatMessage/ChatMessage'
import Input from '../Input/Input'

import { addMessage } from '../../store/actions'

import { messageID } from '../../utils/helpers'
import { URL } from '../../utils/consts.js'

const ConnectedMessages = ({
  getUser,
  getMessages,
  addMessage,
}) => {
  const [text, setText] = useState({
    name: '',
    message: '',
    id: messageID()
  })
  const wsMsg = new WebSocket(URL)

  useEffect(() => {
    wsMsg.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    wsMsg.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const socketData = JSON.parse(evt.data)

      if (socketData.type === 'msgevent') {
        addMessage(socketData)
      }
    }

    wsMsg.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      // wsMsg = new WebSocket(URL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = event => {
    setText({
      name: getUser.name,
      message: event.target.value,
      id: text.id
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    wsMsg.send(JSON.stringify({
      ...text,
      type: 'msgevent'
    }))

    setText({
      name: getUser.name,
      message: '',
      id: messageID()
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
    getUser: state.user.details,
  }),
  dispatch => ({
    addMessage: (text) => dispatch(addMessage(text))
  })
)(ConnectedMessages)

export default Messages
