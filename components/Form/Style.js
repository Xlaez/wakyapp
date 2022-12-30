import styled from 'styled-components';

export const FormContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background: #121432;
	font-family: 'Poppins', sans-serif;
`;
export const FormBrand = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
	text-transform: capitalize;
	strong {
		font-size: 1.8rem;
		font-weight: 700;
		color: #fff;
	}
	@media (max-width: 500px) {
		strong {
			font-size: 1.5rem;
		}
	}
`;

export const Form = styled.form`
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background: #020823;
	border-radius: 2rem;
	padding: 2rem 3rem;

	@media (max-width: 500px) {
		width: 90vw;
	}
`;

export const Forminput = styled.input`
	background: transparent;
	padding: 1rem;
	border: 1px solid #4e0eff;
	border-radius: 0.4rem;
	font-family: 'Roboto', sans-serif;
	color: #ffffff;
	width: 100%;
	font-size: 1rem;

	&:focus {
		border: 1px solid #997af0;
		outline: none;
	}
`;

export const FormBtn = styled.button`
	background: #9c12f9;
	color: #fff;
	padding: 1rem 2rem;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 0.4rem;
	font-size: 1rem;
	text-transform: capitalize;
	transition: 0.5s ease-in;
	font-family: 'Roboto', sans-serif;
	&:hover {
		opacity: 0.8;
	}
`;

export const FormSpan = styled.span`
	color: #ffffff;
	text-transform: capitalize;
	text-align: center;
	font-family: 'Roboto', sans-serif;

	a {
		color: #9c12f9;
		text-decoration: none;
		font-weight: bolder;
	}
`;
