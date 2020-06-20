import { expect } from 'chai';

import reducer from 'reducers/user';
import { onChangeInput, onChangeCheck } from 'actions/user';

describe('reducer for user', () => {
	const stateBefore = {
		username: { value: '', status: false },
		mail: { value: '', status: false },
		password: { value: '', status: false },
		passwordConfirm: { value: '', status: false },
		check: false,
		isSubmit: false,
	};

	it('check treatment of action ON_CHANGE_INPUT', () => {
		const data = 'Jean';
		const identifier = 'username';
		const action = onChangeInput(data, identifier);

		const expectedState = {
			username: { value: 'Jean', status: true },
			mail: { value: '', status: false },
			password: { value: '', status: false },
			passwordConfirm: { value: '', status: false },
			check: false,
			isSubmit: false,
		};

		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});

	it('check treatment of action ON_CHANGE_CHECK', () => {
		const data = true;
		const identifier = 'check';
		const action = onChangeCheck(data, identifier);

		const expectedState = {
			username: { value: '', status: false },
			mail: { value: '', status: false },
			password: { value: '', status: false },
			passwordConfirm: { value: '', status: false },
			check: true,
			isSubmit: false,
		};

		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});
