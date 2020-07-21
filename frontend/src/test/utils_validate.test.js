import { validateField, validatePasswordConfirm } from 'utils/validateField';

describe('ValidateField()', () => {
	const paramsCorrect = [
		[ 'username', 'Jean', true ],
		[ 'mail', 'jean@gmail.com', true ],
		[ 'password', 'jean13', true ]
	];

	const paramsWrong = [ [ 'username', '', false ], [ 'mail', 'jean@gma', false ], [ 'password', 'jea', false ] ];

	it.each(
		paramsCorrect
	)('should return true when user enter correct value in the input %s', (identifier, value, toReturn) => {
		const result = validateField(value, identifier);
		expect(result).toEqual(toReturn);
	});

	it.each(
		paramsWrong
	)('should return false when user enter wrong value in the input %s', (identifier, value, toReturn) => {
		const result = validateField(value, identifier);
		expect(result).toEqual(toReturn);
	});
});

describe('validatePasswordConfirm()', () => {
	const paramsCorrect = [ [ 'Jean13', 'Jean13', true ] ];

	const paramsWrong = [ [ 'jea', 'Jean13', false ] ];

	it.each(paramsCorrect)('should return true when passwordConfirm === password', (value, password, toReturn) => {
		const result = validatePasswordConfirm(value, password);
		expect(result).toEqual(toReturn);
	});

	it.each(paramsWrong)('should return false when passwordConfirm !== password', (value, password, toReturn) => {
		const result = validatePasswordConfirm(value, password);
		expect(result).toEqual(toReturn);
	});
});
