import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { MessagesRoot } from './Messages.shards'

import ChatMessage from '../ChatMessage/ChatMessage'
import Input from '../Input/Input'

import { addMessage, updateMessage } from '../../store/actions'

import { messageID, getMsgHour } from '../../utils/helpers'
import { URL, EVENT_TYPE } from '../../utils/consts.js'

const ConnectedMessages = ({
  getUser,
  getMessages,
  addMessage,
  updateMessage,
}) => {
  const [text, setText] = useState({
    name: '',
    message: '',
    id: messageID(),
    date: '',
    type: ''
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

      if (socketData.type === EVENT_TYPE.MESSAGE_EVENT) {
        addMessage(socketData)
      }

      if (socketData.type === EVENT_TYPE.MESSAGE_REMOVE) {
        updateMessage({
          ...socketData,
          message: 'Message removed',
          type: EVENT_TYPE.MESSAGE_REMOVE
        })
      }

      if (socketData.type === EVENT_TYPE.MESSAGE_EDIT) {
        updateMessage({
          ...socketData,
          type: EVENT_TYPE.MESSAGE_EDIT
        })
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
      id: text.id,
      date: getMsgHour(),
      type: text.type
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (text.message.length) {

      if (text.type === EVENT_TYPE.MESSAGE_EDIT) {
        wsMsg.send(JSON.stringify({
          ...text,
          type: EVENT_TYPE.MESSAGE_EDIT
        }))
      } else {
        wsMsg.send(JSON.stringify({
          ...text,
          type: EVENT_TYPE.MESSAGE_EVENT
        }))
      }

      setText({
        name: getUser.name,
        message: '',
        id: messageID(),
        date: '',
        type: ''
      })
    }
  }

  const handleRemoveMessage = data => wsMsg.send(JSON.stringify({
    ...data,
    type: EVENT_TYPE.MESSAGE_REMOVE
  }))

  const handleEditMessage = data => {
    setText({
      name: getUser.name,
      message: data.message,
      id: data.id,
      date: data.date,
      type: EVENT_TYPE.MESSAGE_EDIT
    })
  }

  return <MessagesRoot>
    <div>
      {getMessages.map(data => <ChatMessage
        key={data.id}
        text={data.message}
        name={data.name}
        date={data.date}
        isUser={getUser.name === data.name}
        removeMessage={() => handleRemoveMessage(data)}
        type={data.type}
        editMessage={() => handleEditMessage(data)}
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
    addMessage: (text) => dispatch(addMessage(text)),
    updateMessage: (id) => dispatch(updateMessage(id)),
  })
)(ConnectedMessages)

export default Messages
