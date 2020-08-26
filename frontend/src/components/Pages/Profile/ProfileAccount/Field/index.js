import React from 'react';
import { Form } from 'semantic-ui-react';

const Field = ({ idFor, label, typeInput, value, error, changeCurrentUser }) => {
	return (
		<Form.Field>
			<label htmlFor={idFor}>{label}</label>
			<div>
				<Form.Input type={typeInput} onChange={changeCurrentUser} value={value} id={idFor} error={error} />
			</div>
		</Form.Field>
	);
};

export default Field;
