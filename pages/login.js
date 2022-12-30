/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import FormInput from '../components/Form/FormInput';
import {
	Form,
	FormBrand,
	FormBtn,
	FormContainer,
	FormSpan,
} from '../components/Form/Style';
import Head from 'next/head';

function login() {
	const inputData = [
		{ name: 'email', type: 'text', id: '1' },
		{ name: 'password', type: 'password', id: '80' },
	];
	return (
		<>
			<Head>
				<title>Waky Chat | Login</title>
				<meta
					name="description"
					content="Waky chat is a simple and fun social media platform"
				/>
			</Head>
			<FormContainer>
				<Form>
					<FormBrand>
						<strong>Waky Chat</strong>
					</FormBrand>
					<FormInput inputs={inputData} />
					<FormBtn>Login</FormBtn>
					<FormSpan>
						Don't have an account ? <Link href="/register">Sign Up</Link>
					</FormSpan>
				</Form>
			</FormContainer>
		</>
	);
}

export default login;
