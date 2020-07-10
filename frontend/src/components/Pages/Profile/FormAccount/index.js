import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import Field from './Field';

const FormAccount = () => {
	return (
		<div>
			<Form>
				<Field
					label="Nom d'utilisateur"
					//onChangeInput={onChangeInput}
					//value={passwordConfirm.value}
					idFor="username"
					type="text"
				/>

				<Field
					label="Mail"
					//onChangeInput={onChangeInput}
					//value={passwordConfirm.value}
					idFor="mail"
					type="email"
				/>

				<Field
					label="Mot de passe"
					//onChangeInput={onChangeInput}
					//value={passwordConfirm.value}
					idFor="password"
					type="password"
				/>

				<Form.Field>
					<Checkbox id="check" label="Devenir membre créateur" />
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
