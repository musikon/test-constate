import React from 'react'
import { ViewChat, ListChat, Header } from '../../components'

const ChatContainer = () => (
	<>
		<Header />
		<ListChat/>
		<div>
			<ViewChat />
		</div>
	</>
);

export default ChatContainer
