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
import axios from 'axios';
import { serverUri } from '../lib/utils';

function register() {
	let inputs = {
		username: '',
		email: '',
		password: '',
	};

	const formInputs = (data) => {
		inputs = data;
	};

	const inputData = [
		{ name: 'username', type: 'text', id: '90' },
		{ name: 'email', type: 'text', id: '1' },
		{ name: 'password', type: 'password', id: '80' },
	];

	const submitRequest = async (e) => {
		e.preventDefault();
		const req = await axios.post(`${serverUri}/api/register`, {
			username: inputs.username,
			email: inputs.email,
			password: inputs.password,
		});
		console.log(req);
	};

	return (
		<>
			<Head>
				<title>Waky Chat | Signup</title>
				<meta
					name="description"
					content="Waky chat is a simple and fun social media platform"
				/>
			</Head>
			<FormContainer>
				<Form onSubmit={(e) => submitRequest(e)}>
					<FormBrand>
						<strong>Waky Chat</strong>
					</FormBrand>
					<FormInput inputs={inputData} formInputs={formInputs} />
					<FormBtn>Register</FormBtn>
					<FormSpan>
						Already have an account ? <Link href="/login">Sign In</Link>
					</FormSpan>
				</Form>
			</FormContainer>
		</>
	);
}

export default register;
