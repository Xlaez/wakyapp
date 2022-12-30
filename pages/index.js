import Head from 'next/head';
import Body from '../components/Body/Body';
import styles from '../styles/Main.module.css';
import SideBar from '../components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import { getWindowDimensions } from '../utils/windowSize';

export default function Home() {
	const [selectedUser, setSelectedUser] = useState(undefined);

	const [screen, setScreen] = useState('laptop');

	useEffect(() => {
		const screenSize = getWindowDimensions();
		if (screenSize.width < 500) {
			setScreen('mobile');
		} else if (screenSize.width > 1200) {
			setScreen('laptop');
		} else {
			setScreen('tablet');
		}
	}, []);

	const changeCurrentUser = (friend) => {
		setSelectedUser(friend);
	};

	return (
		<>
			<Head>
				<title>Waky Chat</title>
				<meta
					name="description"
					content="Waky chat is a simple and fun social media platform"
				/>
			</Head>
			<main>
				<div className={styles.container}>
					{screen === 'laptop' && (
						<>
							<SideBar changeCurrentUser={changeCurrentUser} />
							<Body
								selectedUser={selectedUser}
								changeCurrentUser={changeCurrentUser}
							/>
						</>
					)}
					{screen == 'mobile' && (
						<>
							{!selectedUser ? (
								<SideBar changeCurrentUser={changeCurrentUser} />
							) : (
								<Body
									selectedUser={selectedUser}
									changeCurrentUser={changeCurrentUser}
								/>
							)}
						</>
					)}
				</div>
			</main>
		</>
	);
}
