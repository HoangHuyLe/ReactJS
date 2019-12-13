import {
      AUTHENTICATE,
      AUTHENTICATE_SUCCESS,
      AUTHENTICATE_FAILED,
      SIGN_OUT
} from '../constants/index';

var initialState = {
      isAuthenticated: false,
      username: ""
}

const auth = (state = initialState, action) => {
      switch (action.type) {
            case AUTHENTICATE:
                  console.log(action)
                  return state;
            case AUTHENTICATE_SUCCESS:
                  state = {
                        isAuthenticated: true,
                        username: action.username
                  };
                  return state;
            case AUTHENTICATE_FAILED:
                  console.log(action.error);
                  return state;
            case SIGN_OUT:
                  return state;
            default:
                  return state;
      }
}

export default auth;