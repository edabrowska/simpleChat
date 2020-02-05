import React from 'react'

import { ParticipantTileRoot } from './ParticipantTile.shards'

const ParticipantTile = ({ name }) => <ParticipantTileRoot>
  {name}
</ParticipantTileRoot>

export default ParticipantTile
