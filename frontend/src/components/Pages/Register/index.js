import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from 'components/Pages/Register/Field';

const Register = ({
	username,
	mail,
	password,
	passwordConfirm,
	check,
	onChangeInput,
	onChangeCheck,
	registerUser,
	isSubmit
}) => {
	return (
		<div>
			<Form>
				<Field
					label="Nom d'utilisateur"
					onChangeInput={onChangeInput}
					value={username.value}
					idFor="username"
					placeholder="Nom d'utilisateur"
					status={isSubmit === true ? username.status : null}
					type="text"
				/>

				<Field
					label="Adresse mail"
					onChangeInput={onChangeInput}
					value={mail.value}
					idFor="mail"
					placeholder="Adresse mail"
					status={isSubmit === true ? mail.status : null}
					type="email"
				/>

				<Field
					label="Mot de passe"
					onChangeInput={onChangeInput}
					value={password.value}
					idFor="password"
					placeholder="Mot de passe"
					status={isSubmit === true ? password.status : null}
					type="password"
				/>

				<Field
					label="Entrez le mot de passe à nouveau"
					onChangeInput={onChangeInput}
					value={passwordConfirm.value}
					idFor="passwordConfirm"
					placeholder="Entrez le mot de passe à nouveau"
					status={isSubmit === true ? passwordConfirm.status : null}
					type="password"
				/>

				<Form.Field>
					<Checkbox onChange={onChangeCheck} checked={check} id="check" label="Créateur de contenu ?" />
				</Form.Field>
				<Button onClick={registerUser} type="submit">
					Créer votre compte Pixize
				</Button>
			</Form>
		</div>
	);
};

Register.propTypes = {
	username: PropTypes.shape({
		value: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}).isRequired,

	mail: PropTypes.shape({
		value: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}).isRequired,

	password: PropTypes.shape({
		value: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}).isRequired,

	passwordConfirm: PropTypes.shape({
		value: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}).isRequired,

	check: PropTypes.bool.isRequired,

	onChangeInput: PropTypes.func.isRequired,
	onChangeCheck: PropTypes.func.isRequired,
	isSubmit: PropTypes.bool.isRequired
};

export default Register;
