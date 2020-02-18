import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { ParticipantsRoot, ParticipantTile } from './Participants.shards'

import Input from '../Input/Input'

import { addParticipant } from '../../store/actions'

import { participantID } from '../../utils/helpers'
import { URL } from '../../utils/consts.js'

const ConnectedParticipants = ({
  getParticipants,
  addParticipant,
}) => {
  const [newName, setNewName] = useState({
    name: '',
    id: participantID()
  })
  const ws = new WebSocket(URL)

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected participant')
    }

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const socketData = JSON.parse(evt.data)

      if (socketData.type === 'userevent') {
        addParticipant(socketData)
      }
    }

    ws.onclose = () => {
      console.log('disconnected participant')
      // automatically try to reconnect on connection loss
      // ws = new WebSocket(URL)
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
      type: 'userevent'
    }))
    setNewName({
      name: '',
      id: ''
    })
  }

  return <ParticipantsRoot>
    <div>
      {getParticipants.map((participant, index) => <ParticipantTile
        key={`${participant.name}-${index}`}
      >
        <p>{participant.name}</p>
      </ParticipantTile>)}
    </div>
    <Input
      handleSubmit={handleSubmit}
      id='name'
      value={newName.name}
      placeholder='Type in your name'
      handleChange={handleChange}
    />
  </ParticipantsRoot>
}

const Participants = connect(
  null,
  dispatch => ({
    addParticipant: (participant) => dispatch(addParticipant(participant))
  })
)(ConnectedParticipants)

export default Participants
