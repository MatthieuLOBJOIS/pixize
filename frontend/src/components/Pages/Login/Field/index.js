import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Field = ({ label, idFor, placeholder, typeInput, onChangeInput, value }) => {
	return (
		<Form.Field>
			<label htmlFor={idFor}>{label}</label>
			<div>
				<input onChange={onChangeInput} value={value} type={typeInput} id={idFor} placeholder={placeholder} />
			</div>
		</Form.Field>
	);
};

Field.propTypes = {
	label: PropTypes.string.isRequired,
	idFor: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default Field;
