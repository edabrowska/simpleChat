import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ParticipantTileRoot } from './ParticipantTile.shards'

import Input from '../Input/Input'

import { addParticipant } from '../../store/actions'

const ConnectedParticipantTile = ({ name, placeholder, addParticipant }) => {
  const [newName, setNewName] = useState({ name: '' })

  const handleChange = event => {
    setNewName({ [event.target.id]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addParticipant(newName)
  }

  return (
    <ParticipantTileRoot>
      {placeholder
        ? <Input
          handleSubmit={handleSubmit}
          id='name'
          value={newName.name}
          placeholder={placeholder}
          handleChange={handleChange}
        />
        : <p>{name}</p>
      }
    </ParticipantTileRoot>
  )
}

const ParticipantTile = connect(
  null,
  dispatch => ({
    addParticipant: (participant) => dispatch(addParticipant(participant))
  })
)(ConnectedParticipantTile)

export default ParticipantTile
