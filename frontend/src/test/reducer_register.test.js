import { expect } from 'chai';

import reducer from 'reducers/register';
import { onChangeInput, onChangeCheck, createdUser } from 'actions/register';

const stateBefore = {
	username: { value: '', status: false },
	mail: { value: '', status: false },
	password: { value: '', status: false },
	passwordConfirm: { value: '', status: false },
	check: false,
	isSubmit: false,
	userCreat: ''
};

describe('reducer for user: form field', () => {
	it('check treatment of action ON_CHANGE_INPUT', () => {
		const data = 'Jean';
		const identifier = 'username';
		const action = onChangeInput(data, identifier);

		const expectedState = {
			...stateBefore,
			username: { value: 'Jean', status: true }
		};

		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});

	it('check treatment of action ON_CHANGE_CHECK', () => {
		const data = true;
		const identifier = 'check';
		const action = onChangeCheck(data, identifier);

		const expectedState = {
			...stateBefore,
			check: true
		};

		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});

describe('reducer for user: signup user response', () => {
	const params = [ [ 'success', 'isCreat' ], [ 'error', 'isCreatError' ] ];

	it.each(params)('check treatment of action CREATED_USER %s', (type, response) => {
		const action = createdUser(response);
		const expectedState = {
			...stateBefore,
			userCreat: response
		};
		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});
