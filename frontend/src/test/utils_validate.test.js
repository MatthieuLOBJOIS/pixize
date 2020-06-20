import { validateField } from 'utils/validateField';

describe('ValidateField()', () => {
	const paramsCorrect = [
		['username', 'Jean', '', true],
		['mail', 'jean@gmail.com', '', true],
		['password', 'jean13', '', true],
		['passwordConfirm', 'jean13', 'jean13', true],
	];

	const paramsWrong = [
		['username', '', '', false],
		['mail', 'jean@gma', '', false],
		['password', 'jea', '', false],
		['passwordConfirm', 'jean1', 'jean13', false],
	];

	it.each(paramsCorrect)(
		'should return true when user enter correct value in the input %s',
		(identifier, value, password, toReturn) => {
			const result = validateField(value, identifier, password);
			expect(result).toEqual(toReturn);
		}
	);

	it.each(paramsWrong)(
		'should return false when user enter wrong value in the input %s',
		(identifier, value, password, toReturn) => {
			const result = validateField(value, identifier, password);
			expect(result).toEqual(toReturn);
		}
	);
});
