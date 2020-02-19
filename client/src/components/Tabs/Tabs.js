import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TabsRoot, TabHeader, TabTitle, TabContent } from './Tabs.shards'

import Participants from '../Participants/Participants'
import Messages from '../Messages/Messages'

const getTabs = (getParticipants, participantsCount, getMessages) => [
  {
    name: `Participants (${participantsCount})`,
    content: <Participants getParticipants={getParticipants} />
  },
  {
    name: 'Chat',
    content: <Messages getMessages={getMessages} />
  }
]

const ConnectedTabs = ({
  getParticipants,
  getMessages,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const participantsCount = getParticipants.length
  const tabs = getTabs(getParticipants, participantsCount, getMessages)

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
    getParticipants: state.participants.participantsList,
    getMessages: state.messages.messagesList
  })
)(ConnectedTabs)

export default Tabs
