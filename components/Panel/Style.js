import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';

export const PanelWrapper = styled.div`
	background: #010213;
	color: #fff;
	font-family: 'Roboto', sans-serif;
	height: 15vh;
	padding: 0.9rem 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ffffff34;
`;

export const PanelUser = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: flex-start;
	align-items: center;
	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
`;

export const PanelUserInfo = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;

	p {
		word-wrap: line-break;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-family: 'Source Sans Pro', sans-serif;
	}

	span {
		font-size: 1.4rem;
		font-weight: 700;
		padding-bottom: 1.2rem;
	}
	@media (max-width: 500px) {
		width: 200px;
		span {
			font-size: 1.2rem;
		}
	}
`;

export const PanelMenuBar = styled.div`
	background: #9c12f9;
	padding: 0.6rem;
	border-radius: 10px;
	transition: 0.5s all ease-in-out;
	&:hover {
		cursor: pointer;
		background: #121432;
	}
`;

export const PanelMenuIcon = styled(BiMenu)`
	font-size: 1.5rem;
`;
