import {
      SHOW_LOGIN_FORM, 
      HIDE_LOGIN_FORM,
      SHOW_REGISTER_FORM,
      HIDE_REGISTER_FORM
}from './../constants/index';

var initialState = {
      isShowLoginForm : false,
      isShowRegisterForm : false
}

const login = (state = initialState, action) => {
      switch (action.type) {
            default:
                  return state;
      }
} 

export default login;