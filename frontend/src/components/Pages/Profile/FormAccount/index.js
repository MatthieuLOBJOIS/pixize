import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import Field from './Field';

const FormAccount = ({ currentUser }) => {
	console.log(currentUser);
	return (
		<div>
			<Form>
				<Field
					label="Nom d'utilisateur"
					//onChangeInput={onChangeInput}
					value={currentUser.username}
					id="username"
					typeInput="text"
				/>

				<Field
					label="Mail"
					//onChangeInput={onChangeInput}
					value={currentUser.mail}
					id="mail"
					typeInput="email"
				/>

				<Field
					label="Mot de passe"
					//onChangeInput={onChangeInput}
					value={currentUser.password}
					id="password"
					typeInput="password"
				/>

				<Form.Field>
					<Checkbox id="check" checked={currentUser.check} label="Devenir membre créateur" />
				</Form.Field>

				<Button type="submit">Mettre à jour votre compte</Button>
			</Form>
			<Button color="red" type="button">
				Supprimer votre compte
			</Button>
		</div>
	);
};

export default FormAccount;
