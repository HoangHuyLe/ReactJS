import * as Types from './../constants/ActionTypes';

var initialState = null;

const productEditting = (state = initialState, action) =>{
      switch (action.type){
            case Types.UPDATE_FORM:                  
                  return action.productEditting;
            default:
                  return state;
      }
}

export default productEditting;
