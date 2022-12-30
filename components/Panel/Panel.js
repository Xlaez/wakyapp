/* eslint-disable @next/next/no-img-element */
import { ContactProfileAvatar } from '../SideBar/Style';

import {
	PanelMenuBar,
	PanelMenuIcon,
	PanelUser,
	PanelUserInfo,
	PanelWrapper,
} from './Style';

function Panel({ selectedUser, changeCurrentUser }) {
	const revert = () => {
		changeCurrentUser(undefined);
	};
	return (
		<PanelWrapper>
			<PanelUser>
				{selectedUser?.img ? (
					<img src={selectedUser.img} alt="" />
				) : (
					<ContactProfileAvatar />
				)}
				<PanelUserInfo>
					<div>
						{selectedUser ? (
							<span>{selectedUser.username}</span>
						) : (
							<span>Emmanuel</span>
						)}
					</div>
					<div>
						{selectedUser ? (
							<p>{selectedUser.msg}</p>
						) : (
							<p>
								Hello there, I am an aspiriing astronaut, tech enthutiast and
								also a footballer.
							</p>
						)}
					</div>
				</PanelUserInfo>
			</PanelUser>
			<PanelMenuBar>
				<PanelMenuIcon onClick={() => revert()} />
			</PanelMenuBar>
		</PanelWrapper>
	);
}

export default Panel;
