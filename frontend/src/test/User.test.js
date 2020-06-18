import React from 'react';
import { render } from '@testing-library/react';
import { onChangeInput, onChangeCheck } from 'actions/user';

describe('User action', () => {
	it('should return object when user enter value', () => {
		const data = 'Jean';
		const identifier = 'username';
		const result = onChangeInput(data, identifier);
		expect(result).toStrictEqual({ data: 'Jean', identifier: 'username', type: 'ON_CHANGE_INPUT' });
	});
	it('should return object when user use the checkbox', () => {
		const data = true;
		const identifier = 'checkbox';
		const result = onChangeCheck(data, identifier);
		expect(result).toStrictEqual({ data: true, identifier: 'checkbox', type: 'ON_CHANGE_CHECK' });
	});
});
