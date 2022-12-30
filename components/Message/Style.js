import styled from 'styled-components';

export const Chat = styled.div`
	padding-top: 1rem;
	background: #010213;
	color: #fff;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 85vh;
	.chat-input {
		height: 11%;
	}
	@media (max-width: 500px) {
		chat-input {
			height: 12%;
		}
	}
`;

export const ChatContainer = styled.div`
	height: 88%;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow: auto;
	@media (max-width: 500px) {
		padding: 1rem 2rem;
	}
	&::-webkit-scrollbar {
		width: 0.2rem;
		&-thumb {
			background: #ffffff39;
			width: 0.1rem;
			border-radius: 1rem;
		}
	}
	.message {
		// display: flex;
		// align-items: center;

		.content {
			max-width: 40%;
			overflow-wrap: break-word;
			padding: 0.8rem;
			font-size: 0.9rem;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
			border-radius: 1rem;
			margin: 5px;
			position: relative;
			color: #ccc;
			font-family: 'Source Sans Pro', sans-serif;
			p {
				padding-bottom: 0.5rem;
			}
			small {
				color: yellow;
			}
		}
		.friend-info {
			position: relative;
			color: #fff;
			padding: 0.3rem 0;
			font-size: 0.6rem;
		}
	}
	.sent {
		// justify-content: flex-end;
		justify-content: flex-start;
		.content {
			background: #9900ff20;
			float: right;
			clear: both;
			border-top-right-radius: 0px;
			&:before {
				content: '';
				width: 0px;
				height: 0px;
				display: block;
				border-left: 5px solid #9900ff20;
				border-right: 5px solid transparent;
				border-top: 5px solid #9900ff20;
				border-bottom: 5px solid transparent;
				position: absolute;
				top: 0px;
				right: -10px;
			}
		}
		.friend-info {
			float: right;
			clear: both;
			background: transparent;
		}
	}
	.received {
		.content {
			float: left;
			clear: both;
			border-top-left-radius: 0px;
			background: #121432;
			&:before {
				content: '';
				width: 0px;
				height: 0px;
				display: block;
				border-left: 5px solid transparent;
				border-right: 5px solid #121432;
				border-top: 5px solid #121432;
				border-bottom: 5px solid transparent;
				position: absolute;
				top: 0px;
				left: -10px;
			}
		}
		.friend-info {
			float: left;
			clear: both;
			background: transparent;
		}
	}
`;

export const InputContainer = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: 5% 93%;
	grid-gap: 0.8rem;
	height: auto;
	align-items: center;
	background: #080420;
	padding: 0 2rem;
	padding-bottom: 0.29rem;

	@media (max-width: 500px) {
		grid-template-columns: 5% 90%;
		grid-gap: 1.4rem;
		padding: 0 1rem;
	}

	.button-container {
		display: flex;
		align-items: center;
		color: #fff;
		padding: 1rem;
		.emoji {
			position: absolute;
			svg {
				font-size: 1.5rem;
				color: #fff000c8;
				cursor: pointer;
			}
			.emoji-picker-react {
				top: -350px;
				background: #080429;
				box-shadow: 0 5px 2px #9a86f3;
				border-color: #9186f3;
				.emoji-categories {
					button {
						filter: contrast(0);
					}
				}
				.emoji-search {
					background: transparent;
					border-color: #9186f3;
				}
				.emoji-group {
					&:before {
						background: #080420;
					}
				}
			}
		}
	}
	.input-container {
		height: 100%;
		width: 100%;
		background: transparent;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		background: #ffffff34;
		padding: 0.1rem;
		gap: 2rem;
		position: sticky;
		input {
			width: 90%;
			height: 40px;
			background: transparent;
			color: #fff;
			border: none;
			padding-left: 1rem;
			font-size: 1rem;
			&::selection {
				background: #9a86f3;
			}
			&:focus {
				outline: none;
			}
		}
		button {
			padding: 0.3rem 2rem;
			border-radius: 2rem;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #9c12f9;
			border: none;
			svg {
				font-size: 2rem;
				color: #fff;
			}
		}
	}
`;
