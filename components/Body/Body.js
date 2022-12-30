import React from 'react';
import { BodyWrapper } from './Style';
import Panel from '../Panel/Panel';
import Container from '../Message/Container';

function Body({ selectedUser, changeCurrentUser }) {
	return (
		<BodyWrapper>
			<Panel
				selectedUser={selectedUser}
				changeCurrentUser={changeCurrentUser}
			/>
			<Container />
		</BodyWrapper>
	);
}

export default Body;
