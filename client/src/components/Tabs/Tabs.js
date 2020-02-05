import React, { useState } from 'react'

import { TabsRoot, TabHeader, TabTitle, TabContent } from './Tabs.shards'

import Participants from '../Participants/Participants'

const getTabs = (participantsCount) => [
  {
    name: `Participants ${participantsCount}`,
    content: <Participants />
  },
  {
    name: 'Chat',
    content: 'asd2'
  }
]

const Tabs = ({ participantsCount = 0 }) => {
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

export default Tabs
