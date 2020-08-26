import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import Field from 'components/Pages/Login/Field';
import useStyles from './style';

const Login = ({ onChangeInput, mail, password, loginUser, userAuth }) => {
	const history = useHistory();
	const classes = useStyles();

	useEffect(() => {
		if (userAuth === 'isConnect') {
			history.push('/');
		}
	}, [userAuth]);

	return (
		<div className={classes.root}>
			<Form>
				<Field
					onChangeInput={onChangeInput}
					value={mail}
					label="Adresse mail"
					idFor="mail"
					placeholder="Adresse mail"
					typeInput="email"
				/>
				<Field
					onChangeInput={onChangeInput}
					value={password}
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
