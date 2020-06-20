import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Field from 'components/Pages/Register/Field';
import './setupTests';

describe('<Field />', () => {
	it('Uses information given as props', () => {
		const username = { value: 'Jean', status: true };
		const isSubmit = true;
		const text = "Nom d'utilisateur";

		const changeFn = jest.fn();

		const wrapper = shallow(
			<Field
				label="Nom d'utilisateur"
				onChangeInput={changeFn}
				value={username.value}
				idFor="username"
				placeholder="Nom d'utilisateur"
				status={isSubmit === true ? username.status : null}
				type="text"
			/>
		);
		wrapper.simulate('change');
		expect(changeFn);

		const label = wrapper.find('label');
		expect(label).to.have.lengthOf(1);
		expect(label.text()).to.equal(text);
	});
});
