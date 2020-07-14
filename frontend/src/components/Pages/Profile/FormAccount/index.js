import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import Field from './Field';

const FormAccount = ({ currentUser, changeCurrentUser }) => {
	//	console.log(currentUser);
	return (
		<div>
			<Form>
				<Field
					label="Nom d'utilisateur"
					changeCurrentUser={changeCurrentUser}
					value={currentUser.username}
					idFor="username"
					typeInput="text"
				/>

				<Field
					label="Mail"
					changeCurrentUser={changeCurrentUser}
					value={currentUser.mail}
					idFor="mail"
					typeInput="email"
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

export default FormAccount;
