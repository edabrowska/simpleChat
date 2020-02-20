import React from 'react'

import {
	ChatMessageRoot,
	Header,
	Name,
	Date,
	Content,
	Controls,
	DeleteButton,
	EditButton
} from './ChatMessage.shards'

import { EVENT_TYPE } from '../../utils/consts.js'

const ChatMessage = ({
	name,
	text,
	date,
	isUser,
	removeMessage,
	type
}) => <ChatMessageRoot>
		{(isUser && type !== EVENT_TYPE.MESSAGE_REMOVE) && <Controls>
			<EditButton>...</EditButton>
			<DeleteButton onClick={removeMessage}>
				x
		</DeleteButton>
		</Controls>}
		<Header>
			<Name>{name}</Name> <Date>{date}</Date>
		</Header>
		<Content type={type}>{text}</Content>
	</ChatMessageRoot>

export default ChatMessage