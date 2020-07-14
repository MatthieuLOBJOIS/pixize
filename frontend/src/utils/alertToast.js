import { toast } from 'react-semantic-toasts';

export const alertToast = (alert) =>
	toast({
		...alert,
		animation: 'bounce',
		time: 5000,
		onClose: () => console.log('close'),
		onClick: () => console.log('you click on the toast'),
		onDismiss: () => console.log('you have dismissed this toast')
	});
