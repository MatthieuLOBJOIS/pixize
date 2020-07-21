import { expect } from 'chai';

import reducer from 'reducers/user';
import { updateCurrentUser } from 'actions/user';

const stateBefore = {
	currentUser: {},
	status: {
		username: null,
		mail: null
	}
};

const stateUserConnected = {
	currentUser: {
		username: 'Jean',
		mail: 'jean@gmail.com',
		password: 'jean13'
	},
	status: {
		username: null,
		mail: null
	}
};

describe('reducer for user: current user', () => {
	it('check treatment of action UPDATE_CURRENT_USER for username', () => {
		const data = { ...stateUserConnected.currentUser, username: 'JeanDuJardin' };

		const action = updateCurrentUser(data);

		const expectedState = {
			...stateUserConnected,
			currentUser: data
		};

		expect(reducer(stateUserConnected, action)).to.deep.equal(expectedState);
	});
});
