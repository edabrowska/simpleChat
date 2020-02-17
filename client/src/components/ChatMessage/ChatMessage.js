import React from 'react'

// import { ChatAppRoot, Header } from './ChatApp.shards'

const ChatMessage = ({ name = '', text = '' }) => {

	return (
		<div>
			<div>
				<p>{name}</p> <span>date</span>
			</div>
			<p>{text}</p>
		</div>
	)
}

export default ChatMessage