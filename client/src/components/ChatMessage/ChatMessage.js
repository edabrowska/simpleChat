import React from 'react'

import {
	ChatMessageRoot,
	Header,
	Name,
	Date,
	Content,
	Controls,
	DeleteButton,
	EditButton,
	Edited
} from './ChatMessage.shards'

import { EVENT_TYPE } from '../../utils/consts.js'

const ChatMessage = ({ messageInfo, isUser, removeMessage, editMessage }) => {
	const { name, message, date, type } = messageInfo

	return (
		<ChatMessageRoot>
			{(isUser && type !== EVENT_TYPE.MESSAGE_REMOVE) && <Controls>
				<EditButton onClick={editMessage}>...</EditButton>
				<DeleteButton onClick={removeMessage}>x</DeleteButton>
			</Controls>}
			<Header>
				<Name>{name}</Name> <Date>{date}</Date>
			</Header>
			<Content type={type}>{message}</Content>
			{type === EVENT_TYPE.MESSAGE_EDIT && <Edited>Message edited</Edited>}
		</ChatMessageRoot>
	)
}

export default ChatMessage