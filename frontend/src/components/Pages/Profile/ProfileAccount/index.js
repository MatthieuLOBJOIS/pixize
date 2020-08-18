import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

import Field from './Field';
import useStyles from './style';

const ProfileAccount = ({ currentUser, username, mail, changeCurrentUser, saveNewCurrentUser }) => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.accountDisplay}>
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
		</div>
	);
};

ProfileAccount.propTypes = {
	currentUser: PropTypes.objectOf(PropTypes.string).isRequired,
	changeCurrentUser: PropTypes.func.isRequired,
	saveNewCurrentUser: PropTypes.func.isRequired
};

export default ProfileAccount;
