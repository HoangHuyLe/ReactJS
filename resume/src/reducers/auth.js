import {
      AUTHENTICATE,
      AUTHENTICATE_SUCCESS,
      AUTHENTICATE_FAILED,
      SIGN_OUT
} from '../constants/index';
import { toastError} from './../helpers/toastHelper';

var initialState = {
      isAuthenticated: false,
      username: ""
}

const auth = (state = initialState, action) => {
      switch (action.type) {
            case AUTHENTICATE:                  
                  return state;
            case AUTHENTICATE_SUCCESS:                  
                  state = {
                        isAuthenticated: true,
                        username: action.user.username
                  };                  
                  return state;
            case AUTHENTICATE_FAILED:
                  toastError("Username or Password not correct!");                  
                  return state;
            case SIGN_OUT:                  
                  return initialState;
            default:
                  return state;
      }
}

export default auth;