import { ON_CHANGE_INPUT, ON_CHANGE_CHECK } from '../actions/user';

const initialState = {
  username: '',
  mail: '',
  password: '',
  passwordConfirm: '',
  check: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_INPUT: {
      const identifier = action.identifier;
      const value = action.data;
      console.log(identifier, value);
      return {
        ...state,
        [identifier]: value,
      };
    }

    case ON_CHANGE_CHECK: {
      const identifier = action.identifier;
      const value = action.data;

      return {
        ...state,
        [identifier]: value,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
