import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {
  ParticipantsRoot,
  ParticipantTile,
  ParticipantsWrapper
} from './Participants.shards'

import Input from '../Input/Input'

import { addParticipant, addUser } from '../../store/actions'

import { participantID } from '../../utils/helpers'
import { URL, EVENT_TYPE } from '../../utils/consts.js'

const ConnectedParticipants = ({
  getParticipants,
  addParticipant,
  addUser,
  getUser
}) => {
  const [newName, setNewName] = useState({
    name: '',
    id: participantID()
  })
  const ws = new WebSocket(URL)

  useEffect(() => {
    ws.onopen = () => {
      console.log('connected participant')
    }

    ws.onmessage = evt => {
      const socketData = JSON.parse(evt.data)

      if (socketData.type === EVENT_TYPE.USER_EVENT) {
        addParticipant(socketData)
      }
    }

    ws.onclose = () => {
      console.log('disconnected')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = event => {
    setNewName({
      name: event.target.value,
      id: newName.id
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    ws.send(JSON.stringify({
      ...newName,
      type: EVENT_TYPE.USER_EVENT
    }))

    addUser(newName)

    setNewName({
      name: '',
      id: ''
    })
  }

  return <ParticipantsRoot>
    <ParticipantsWrapper>
      {getParticipants.map(participant => <ParticipantTile
        key={participant.id}
      >
        <p>{participant.name}</p>
      </ParticipantTile>)}
    </ParticipantsWrapper>
    {!getUser.name && <Input
      handleSubmit={handleSubmit}
      id='name'
      value={newName.name}
      placeholder='Type in your name'
      handleChange={handleChange}
    />}
  </ParticipantsRoot>
}

const Participants = connect(
  null,
  dispatch => ({
    addParticipant: (participant) => dispatch(addParticipant(participant)),
    addUser: (user) => dispatch(addUser(user))
  })
)(ConnectedParticipants)

export default Participants
