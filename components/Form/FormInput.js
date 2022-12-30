/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Forminput } from './Style';

function AuthForm({ inputs, formInputs }) {
	const [input, setInputs] = useState({
		username: '',
		email: '',
		password: '',
	});

	const changeInputs = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
		formInputs({
			...input,
		});
	};
	return (
		<>
			{inputs.map((input) => {
				return (
					<Forminput
						type={input.type}
						name={input.name}
						placeholder={input.name}
						key={input.id}
						onChange={(e) => changeInputs(e)}
					/>
				);
			})}
		</>
	);
}

export default AuthForm;
