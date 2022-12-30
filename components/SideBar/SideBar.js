/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import {
	ContactList,
	ContactListFirstLayer,
	ContactListInfoBox,
	ContactListSecondLayer,
	ContactProfileAvatar,
	ContactWrapper,
	MsgIcon,
	SideBarWrapper,
	TimeSpan,
	UserProfileAvatar,
	UserProfilePanel,
} from './Style';
import { users } from '../../utils/users';

function SideBar({ changeCurrentUser }) {
	const [selected, setSelected] = useState(false);

	const selectFriend = (friend) => {
		setSelected(friend.id);
		changeCurrentUser(friend);
	};

	const user = users.filter((i) => i.username === 'Kinsey');

	return (
		<SideBarWrapper>
			<UserProfilePanel>
				{user[0].img ? <img src={user[0].img} alt="" /> : <UserProfileAvatar />}
				<span>{user[0].username}</span>
			</UserProfilePanel>
			<ContactWrapper>
				{users.map((user) => {
					return (
						<ContactList
							key={user.id}
							onClick={() => selectFriend(user)}
							clicked={selected === user.id ? true : false}
						>
							{!user.img ? (
								<ContactProfileAvatar />
							) : (
								<img src={user.img} alt="" />
							)}
							<ContactListInfoBox>
								<ContactListFirstLayer>
									<strong>{user.username}</strong>
									<TimeSpan>{`${new Date().getHours()}:${new Date().getMinutes()} ${
										new Date().getHours() > 11 ? 'PM' : 'AM'
									}`}</TimeSpan>
								</ContactListFirstLayer>
								<ContactListSecondLayer>
									<span>{user.msg}</span>
									<MsgIcon>
										<span>7</span>
									</MsgIcon>
								</ContactListSecondLayer>
							</ContactListInfoBox>
						</ContactList>
					);
				})}
			</ContactWrapper>
		</SideBarWrapper>
	);
}

export default SideBar;
