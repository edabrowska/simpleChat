import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { MessagesRoot, MessagesWrapper } from './Messages.shards'

import ChatMessage from '../ChatMessage/ChatMessage'
import Input from '../Input/Input'

import { addMessage, updateMessage, showError } from '../../store/actions'

import { messageID, getMsgHour } from '../../utils/helpers'
import { URL, EVENT_TYPE } from '../../utils/consts.js'

const ConnectedMessages = ({
  getUser,
  getMessages,
  addMessage,
  updateMessage,
  showError
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
      console.log('connected')
    }

    wsMsg.onmessage = evt => {
      const socketData = JSON.parse(evt.data)

      switch (socketData.type) {
        case EVENT_TYPE.MESSAGE_EVENT:
          return addMessage(socketData)

        case EVENT_TYPE.MESSAGE_REMOVE:
          return updateMessage({
            ...socketData,
            message: 'Message removed',
            type: EVENT_TYPE.MESSAGE_REMOVE
          })

        case EVENT_TYPE.MESSAGE_EDIT:
          return updateMessage({
            ...socketData,
            type: EVENT_TYPE.MESSAGE_EDIT
          })

        default:
          return null
      }
    }

    wsMsg.onclose = () => {
      if (wsMsg.readyState === 3) {
        showError('WEBSOCKET DISCONNECTED')
      }
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
    <MessagesWrapper>
      {getMessages.map(data => <ChatMessage
        key={data.id}
        messageInfo={data}
        isUser={getUser.name === data.name}
        removeMessage={() => handleRemoveMessage(data)}
        editMessage={() => handleEditMessage(data)}
      />)}
    </MessagesWrapper>
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
    showError: (text) => dispatch(showError(text))
  })
)(ConnectedMessages)

export default Messages
