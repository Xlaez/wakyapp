import { useState } from 'react';
import { InputContainer } from './Style';
import { BsEmojiSmileUpsideDownFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import EmojiPlate from 'emoji-picker-react';

function Input({ sendChat }) {
	const [showEmojiPlate, setShowEMojiPlate] = useState(false);
	const [msg, setMsg] = useState('');

	const displayEmoji = () => {
		setShowEMojiPlate(!showEmojiPlate);
	};

	const pickEmoji = (e, emoji) => {
		let msgs = msg;
		msgs += emoji.emoji;
		setMsg(msgs);
	};

	const sendMsg = (e) => {
		e.preventDefault();
		if (msg.length > 0) {
			sendChat(msg);
			setMsg('');
		}
	};

	return (
		<InputContainer>
			<div className="button-container">
				<div className="emoji">
					<BsEmojiSmileUpsideDownFill onClick={displayEmoji} />
					{showEmojiPlate && <EmojiPlate onEmojiClick={pickEmoji} />}
				</div>
			</div>
			<form className="input-container" onSubmit={(e) => sendMsg(e)}>
				<input
					type="text"
					placeholder="type messages ..."
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
				/>
				<button type="submit">
					<IoMdSend />
				</button>
			</form>
		</InputContainer>
	);
}

export default Input;
