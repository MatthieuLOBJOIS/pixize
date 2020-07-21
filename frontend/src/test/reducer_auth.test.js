import { expect } from 'chai';

import reducer from 'reducers/auth';
import { connectedUser } from 'actions/auth';

const stateBefore = {
	userAuth: '',
	mail: '',
	password: ''
};

describe('reducer for user: login user response', () => {
	const params = [ [ 'success', 'isConnect' ], [ 'error', 'isConnectError' ], [ 'logout', 'isLogout' ] ];

	it.each(params)('check treatment of action CREATED_USER %s', (type, response) => {
		const action = connectedUser(response);
		const expectedState = {
			...stateBefore,
			userAuth: response
		};
		expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
	});
});
