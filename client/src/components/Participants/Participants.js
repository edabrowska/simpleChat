import React from 'react'

import { ParticipantsRoot } from './Participants.shards'

import ParticipantTile from '../ParticipantTile/ParticipantTile'

const getParticipants = [
  {
    name: 'John Doe',
    id: 0,
  },
  {
    name: 'Jane Smith',
    id: 1,
  },
  {
    name: 'Elon Musk',
    id: 2,
  }
]

const Participants = () => <ParticipantsRoot>
  {getParticipants.map(participant => <ParticipantTile
    key={participant.id}
    name={participant.name}
  />)}
</ParticipantsRoot>

export default Participants
