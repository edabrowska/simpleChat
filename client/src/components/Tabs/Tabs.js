import React, { useState } from 'react'
import { connect } from 'react-redux'

import { TabsRoot, TabHeader, TabTitle, TabContent } from './Tabs.shards'

import Participants from '../Participants/Participants'
import Messages from '../Messages/Messages'

const getTabs = (getParticipants, participantsCount, getMessages, getUser) => [
  {
    name: `Participants (${participantsCount})`,
    content: <Participants getParticipants={getParticipants} getUser={getUser} />
  },
  {
    name: 'Chat',
    content: <Messages getMessages={getMessages} />
  }
]

const ConnectedTabs = ({
  getParticipants,
  getMessages,
  getUser = {}
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const participantsCount = getParticipants.length
  const tabs = getTabs(getParticipants, participantsCount, getMessages, getUser)
  const disableMsgWithoutUser = getUser.name

  return (
    <TabsRoot>
      <TabHeader>
        {tabs.map((tab, index) => <TabTitle
          key={index}
          isActive={index === activeIndex}
          onClick={() => disableMsgWithoutUser && setActiveIndex(index)}
          index={index}
          disabled={!disableMsgWithoutUser}
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
    getMessages: state.messages.messagesList,
    getUser: state.user.details,
  })
)(ConnectedTabs)

export default Tabs
