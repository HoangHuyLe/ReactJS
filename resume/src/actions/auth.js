import {
      AUTHENTICATE,
      AUTHENTICATE_SUCCESS,
      AUTHENTICATE_FAILED,
      SIGN_OUT
}from '../constants/index';

export const authenticate = (user) =>{
      return {
            type: AUTHENTICATE,
            user
      }
}

export const authenticateSuccess= (user) =>{
      return {
            type: AUTHENTICATE_SUCCESS,
            user
      }
}

export const authenticateFailed = (error) =>{
      return {
            type: AUTHENTICATE_FAILED,
            error
      }
}

export const signOut = () =>{
      return {
            type: SIGN_OUT
      }
}