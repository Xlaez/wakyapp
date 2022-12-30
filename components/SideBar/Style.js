import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const SideBarWrapper = styled.aside`
	height: 100vh;
	width: 100%;
	background: #050618;
	color: #f4f4f4;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

export const UserProfilePanel = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	padding: 1.5rem 1rem;
	gap: 1rem;
	border-bottom: 1px solid #121432;
	span {
		font-weigth: 700;
		font-size: 1.2rem;
	}
	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
`;

export const UserProfileAvatar = styled(FaUserCircle)`
	font-size: 3rem;
`;

export const ContactWrapper = styled.div`
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	background: #010213;
	color: #fff;
	display: flex;
	flex-direction: column;
	&::-webkit-scrollbar {
		width: 0.3rem;
		&-thumb {
			background: #ffffff39;
			width: 0.2rem;
			border-radius: 0.5rem;
		}
		&-button {
			width: 0.2rem;
			background: #131324;
			color: #131324;
		}
	}
`;

export const ContactList = styled.div`
	padding: 1rem;
	color: #fff;
	display: grid;
	grid-template-columns: 20% 80%;
	align-items: center;
	transition: 0.5s ease-in-out;
	background: ${(props) => (props.clicked ? '#121432' : '#050618')};
	&:hover {
		background: #121432 !important;
		cursor: pointer;
	}
	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
`;

export const ContactListFirstLayer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const ContactListSecondLayer = styled.div`
	display: grid;
	grid-template-columns: 80% 20%;
`;
export const MsgIcon = styled.div`
	margin-left: 1.5rem;
	width: 20px;
	height: 20px;
	background: #9c12f9;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	span {
		font-size: 10px !important;
	}
`;

export const TimeSpan = styled.span`
	color: #e0e0e0;
	font-size: 12px !important;
	padding: 5px;
`;

export const ContactListInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	strong {
		font-size: 700;
		padding-bottom: 1rem;
	}
	span {
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: 'Source Sans Pro', sans-serif;
		overflow: hidden;
		font-size: 15px;
		color: #ccc;
	}
`;

export const ContactProfileAvatar = styled(FaUserCircle)`
	font-size: 3rem;
`;
