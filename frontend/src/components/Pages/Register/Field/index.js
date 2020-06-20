import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import useStyles from './style';

const Field = ({
	label,
	onChangeInput,
	value,
	idFor,
	placeholder,
	status,
	type,
}) => {
	const classes = useStyles();
	const [typeInput, setTypeInput] = useState(type);

	const handlePasswordDisplay = () => {
		switch (typeInput) {
			case 'password':
				setTypeInput('text');
				break;
			case 'text':
				setTypeInput('password');
				break;
			default:
				console.log('eye password');
		}
	};

	return (
		<Form.Field required>
			<label htmlFor={idFor}>{label}</label>
			<div className={classes.layoutInput}>
				<input
					type={typeInput}
					onChange={onChangeInput}
					value={value}
					id={idFor}
					placeholder={placeholder}
				/>

				{(idFor === 'password' || idFor === 'passwordConfirm') && (
					<Icon
						onClick={handlePasswordDisplay}
						className={classes.iconField}
						color="grey"
						size="big"
						name={typeInput === 'password' ? 'eye' : 'eye slash'}
					/>
				)}

				{status !== null && (
					<Icon
						className={classes.iconField}
						color={status === false ? 'red' : 'green'}
						size="big"
						name={status === false ? 'warning circle' : 'check circle'}
					/>
				)}
			</div>
		</Form.Field>
	);
};

Field.propTypes = {
	label: PropTypes.string.isRequired,
	onChangeInput: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	idFor: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
};

export default Field;
