import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';

const Field = ({ idFor, label, typeInput, value }) => {
	return (
		<Form.Field>
			<label htmlFor={idFor}>{label}</label>
			<div>
				<input
					type={typeInput}
					//onChange={onChangeInput}
					value={value}
					id={idFor}
				/>
			</div>
		</Form.Field>
	);
};

export default Field;
