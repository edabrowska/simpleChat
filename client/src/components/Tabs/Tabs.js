import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TabsRoot, TabHeader, TabTitle, TabContent } from './Tabs.shards'

import Participants from '../Participants/Participants'
import Messages from '../Messages/Messages'

const getTabs = (participantsCount) => [
  {
    name: `Participants ${participantsCount}`,
    content: <Participants />
  },
  {
    name: 'Chat',
    content: <Messages />
  }
]

const ConnectedTabs = ({ participantsCount = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabs = getTabs(participantsCount)

  return (
    <TabsRoot>
      <TabHeader>
        {tabs.map((tab, index) => <TabTitle
          key={index}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          index={index}
        >
          {tab.name}
        </TabTitle>)}
      </TabHeader>
      <div>
        {tabs.map((tab, index) => <TabContent
          isActive={index === activeIndex}
          key={index}
        >
          {tab.content}
        </TabContent>)}
      </div>
    </TabsRoot>
  )
}

const Tabs = connect(
  state => ({
    participantsCount: state.participants.participantsList.length
  })
)(ConnectedTabs)

export default Tabs
