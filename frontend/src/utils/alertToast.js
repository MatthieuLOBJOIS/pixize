import { toast } from 'react-semantic-toasts';

export const alertToast = (response) => {
	let alert = {};
	switch (response) {
		case 'isConnect': {
			alert = {
				type: 'info',
				color: 'brown',
				icon: 'info',
				title: 'Bienvenue sur Pixize !'
			};
			break;
		}

		case 'isConnectError': {
			alert = {
				type: 'error',
				color: 'red',
				icon: 'close',
				title: 'Mot de passe ou mail incorrect'
			};
			break;
		}

		case 'isLogout': {
			alert = {
				type: 'info',
				color: 'orange',
				icon: 'log out',
				title: 'Vous avez été déconnecté avec succès, à bientôt sur Pixize !'
			};
			break;
		}

		case 'isCreat': {
			alert = {
				type: 'success',
				color: '',
				icon: 'check',
				title: `Votre compte a été créé avec succès, vous pouvez vous connecter.`
			};
			break;
		}

		case 'isCreatError': {
			alert = {
				type: 'error',
				color: 'red',
				icon: 'close',
				title: "Echec de l'inscription."
			};
			break;
		}

		case 'userUpdate': {
			alert = {
				type: 'success',
				color: 'green',
				title: 'Les changements ont été correctement sauvegardé.'
			};
			break;
		}

		case 'galleryUpdate': {
			alert = {
				type: 'envira gallery',
				color: 'green',
				title: 'Galerie mise à jour !'
			};
			break;
		}

		case 'deleteFile': {
			alert = {
				type: 'envira gallery',
				color: 'orange',
				title: 'Fichier supprimé'
			};
			break;
		}

		default:
			console.log('error');
	}

	return toast({
		...alert,
		animation: 'bounce',
		time: 2500,
		onClose: () => console.log('close'),
		onClick: () => console.log('you click on the toast'),
		onDismiss: () => console.log('you have dismissed this toast')
	});
};
