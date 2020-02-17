import React from 'react'
import { connect } from 'react-redux'

import { ParticipantsRoot } from './Participants.shards'

import ParticipantTile from '../ParticipantTile/ParticipantTile'


const ConnectedParticipants = ({ getParticipants }) => {

  return <ParticipantsRoot>
    {getParticipants.length
      ? getParticipants.map((participant, index) => <ParticipantTile
        key={`${participant.name}-${index}`}
        name={participant.name}
      />)
      : <ParticipantTile placeholder='Type in your name' />
    }
  </ParticipantsRoot>
}

const Participants = connect(
  state => ({
    getParticipants: state.participants.participantsList
  })
)(ConnectedParticipants)

export default Participants
