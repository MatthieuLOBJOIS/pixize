import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Field from 'components/Pages/Login/Field';

const Login = ({ onChangeInput, mail, password, loginUser }) => {
	return (
		<div>
			<Form>
				<Field
					onChangeInput={onChangeInput}
					value={mail.value}
					label="Adresse mail"
					idFor="mail"
					placeholder="Adresse mail"
					typeInput="email"
				/>
				<Field
					onChangeInput={onChangeInput}
					value={password.value}
					label="Mot de passe"
					idFor="password"
					placeholder="Mot de passe"
					typeInput="password"
				/>
				<Button onClick={loginUser} color="orange" type="submit">
					Connexion
				</Button>
			</Form>
			<a href="#">Réinitialiser votre mot de passe</a>
		</div>
	);
};

export default Login;
