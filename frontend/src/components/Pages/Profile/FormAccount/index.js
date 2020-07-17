import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Form, Button, Checkbox } from 'semantic-ui-react';

import Field from './Field';

const FormAccount = ({ currentUser, username, mail, changeCurrentUser, saveNewCurrentUser }) => {
	//	console.log(currentUser);
	return (
		<div>
			<Form onSubmit={saveNewCurrentUser}>
				<Field
					label="Nom d'utilisateur"
					changeCurrentUser={changeCurrentUser}
					value={currentUser.username}
					idFor="username"
					typeInput="text"
					error={username === false}
				/>

				<Field
					label="Mail"
					changeCurrentUser={changeCurrentUser}
					value={currentUser.mail}
					idFor="mail"
					typeInput="email"
					error={mail === false}
				/>

				{/* <Field
					label="Mot de passe"
					changeCurrentUser={changeCurrentUser}
					value={currentUser.password}
					idFor="password"
					typeInput="password"
				/> */}

				{/* <Form.Field>
					<Checkbox
						id="check"
						changeCurrentUser={changeCurrentUser}
						checked={currentUser.check}
						label="Devenir membre créateur"
					/>
				</Form.Field> */}

				<Button type="submit">Mettre à jour votre compte</Button>
			</Form>
			<Button color="red" type="button">
				Supprimer votre compte
			</Button>
		</div>
	);
};

FormAccount.propTypes = {
	currentUser: PropTypes.objectOf(PropTypes.string).isRequired,
	changeCurrentUser: PropTypes.func.isRequired,
	saveNewCurrentUser: PropTypes.func.isRequired
};

export default FormAccount;
