import React from 'react'

import {
	ChatMessageRoot,
	Header,
	Name,
	Date,
	Content
} from './ChatMessage.shards'

const ChatMessage = ({ name, text, date }) => <ChatMessageRoot>
	<Header>
		<Name>{name}</Name> <Date>{date}</Date>
	</Header>
	<Content>{text}</Content>
</ChatMessageRoot>

export default ChatMessage