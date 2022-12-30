import { useRef } from 'react';
import { messages } from '../../utils/messages';
import { randomString } from '../../utils/randomGen';
import { Chat, ChatContainer } from './Style';
import Input from './Input';

function Container() {
	const sendMsg = async (msg) => {
		console.log(msg);
	};
	const scrollRef = useRef();
	return (
		<Chat>
			<ChatContainer>
				{messages.map((message) => {
					return (
						<div ref={scrollRef} key={randomString()}>
							<div
								className={`message ${message.isSender ? 'sent' : 'received'}`}
							>
								{message.isSender && (
									<div className="friend-info">
										<p>you</p>
									</div>
								)}
								<div className="content">
									<p>
										{message.msg
											? message.msg
											: 'You do not have any message with this user'}
									</p>
									{message.msg.length > 1 && (
										<small>{`${new Date().getHours()}: ${new Date().getMinutes()}`}</small>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</ChatContainer>
			<div className="chat-input">
				<Input sendChat={sendMsg} />
			</div>
		</Chat>
	);
}

export default Container;
