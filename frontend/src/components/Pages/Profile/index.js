import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { FcSettings, FcGallery } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';

import useStyles from './style';

const Profile = ({ displayModal, setDisplayModal }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div>
			<Modal
				basic
				onClose={() => setDisplayModal(false)}
				onOpen={() => setDisplayModal(true)}
				open={displayModal}
				size="small"
			>
				<Header icon>
					<Button
						className={classes.closeModalButton}
						basic
						color="red"
						inverted
						onClick={() => setDisplayModal(false)}
					>
						<Icon className={classes.closeModalIcon} name="remove" />
					</Button>
				</Header>
				<Modal.Content>
					<p className={classes.title}>Profil Utilisateur</p>
				</Modal.Content>
				<Modal.Actions className={classes.action}>
					<Button
						basic
						color="orange"
						inverted
						className={classes.buttonAccount}
						onClick={() => {
							history.push('/profil/compte');
							setDisplayModal(false);
						}}
					>
						<FcSettings className={classes.iconAccount} /> Votre Compte
					</Button>
					<Button
						color="grey"
						inverted
						className={classes.buttonGallery}
						onClick={() => {
							history.push('/profil/galerie');
							setDisplayModal(false);
						}}
					>
						<FcGallery className={classes.iconGallery} /> Galerie
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default Profile;
