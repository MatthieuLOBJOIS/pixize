import { expect } from 'chai';

import reducer from 'reducers/user';
import { onChangeInput, onChangeCheck, createdUser, connectedUser } from 'actions/user';

const stateBefore = {
	username: { value: '', status: false },
	mail: { value: '', status: false },
	password: { value: '', status: false },
	passwordConfirm: { value: '', status: false },
	check: false,
	isSubmit: false,
	createdUser: {
		status: null
	},
	connectedUser: {
		status: null,
		message: ''
	}
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
	const params = [ [ 'success', 201 ], [ 'error', 400 ] ];

	it.each(params)('check treatment of action CREATED_USER %s', (type, response) => {
		const action = createdUser(response);
		const expectedState = {
			...stateBefore,
			createdUser: {
				status: response
			}
		};
		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});

describe('reducer for user: login user response', () => {
	const params = [
		[ 'success', 200, 'Bienvenue sur Pixize !' ],
		[ 'error', 401, 'Mot de passe ou mail incorrect' ],
		[ 'logout', 0, 'Vous avez été déconnecté avec succès, à bientôt sur Pixize !' ]
	];

	it.each(params)('check treatment of action CREATED_USER %s', (type, response, message) => {
		const action = connectedUser(response, message);
		const expectedState = {
			...stateBefore,
			connectedUser: {
				status: response,
				message
			}
		};
		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});
