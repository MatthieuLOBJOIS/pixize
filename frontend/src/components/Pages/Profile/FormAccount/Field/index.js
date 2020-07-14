import React from 'react';
import { Form } from 'semantic-ui-react';

const Field = ({ idFor, label, typeInput, value, changeCurrentUser }) => {
	return (
		<Form.Field>
			<label htmlFor={idFor}>{label}</label>
			<div>
				<input type={typeInput} onChange={changeCurrentUser} value={value} id={idFor} />
			</div>
		</Form.Field>
	);
};

export default Field;
