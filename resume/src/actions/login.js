import {
      SHOW_LOGIN_FORM, 
      HIDE_LOGIN_FORM,
      SHOW_REGISTER_FORM,
      HIDE_REGISTER_FORM
}from './../constants/index';

export const showLoginForm = () =>{
      return {
            type: SHOW_LOGIN_FORM
      }
}

export const hideLoginForm = () =>{
      return {
            type: HIDE_LOGIN_FORM
      }
}

export const showRegisterForm = () =>{
      return {
            type: SHOW_REGISTER_FORM
      }
}

export const hideRegisterForm = () =>{
      return {
            type: HIDE_REGISTER_FORM
      }
}