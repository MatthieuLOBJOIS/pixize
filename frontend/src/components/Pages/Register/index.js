import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Register = ({ userAuth, onChangeInput, onChangeCheck, registerUser }) => {
	console.log(userAuth);
	return (
		<div>
			<Form>
				<Form.Field>
					<label htmlFor="username">
						Nom d'utilisateur
						<input
							onChange={onChangeInput}
							value={userAuth.username}
							id="username"
							placeholder="Nom d'utilisateur"
						/>
					</label>
				</Form.Field>
				<Form.Field>
					<label htmlFor="mail">
						Adresse mail
						<input onChange={onChangeInput} value={userAuth.mail} id="mail" placeholder="Adresse mail" />
					</label>
				</Form.Field>
				<Form.Field>
					<label htmlFor="password">
						Mot de passe
						<input
							onChange={onChangeInput}
							value={userAuth.password}
							id="password"
							placeholder="Mot de passe"
						/>
					</label>
				</Form.Field>
				<Form.Field>
					<label htmlFor="passwordConfirm">
						Entrez le mot de passe à nouveau
						<input
							onChange={onChangeInput}
							value={userAuth.passwordConfirm}
							id="passwordConfirm"
							placeholder="Entrez le mot de passe à nouveau"
						/>
					</label>
				</Form.Field>
				<Form.Field>
					<Checkbox
						onChange={onChangeCheck}
						checked={userAuth.check}
						id="check"
						label="Créateur de contenu ?"
					/>
				</Form.Field>
				<Button onClick={registerUser} type="submit">
					Créer votre compte Pixize
				</Button>
			</Form>
		</div>
	);
};

Register.propTypes = {
	userAuth: PropTypes.shape({
		username: PropTypes.string.isRequired,
		mail: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		passwordConfirm: PropTypes.string.isRequired,
		check: PropTypes.bool.isRequired
	}).isRequired,

	onChangeInput: PropTypes.func.isRequired,
	onChangeCheck: PropTypes.func.isRequired
};

export default Register;
