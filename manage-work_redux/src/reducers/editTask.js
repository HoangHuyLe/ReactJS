import * as types from '../constants/ActionTypes';

var inintialState = {};

var itemEditting = (state = inintialState, action) => {
      switch (action.type) {
            case types.EDIT_TASK:
                console.log(action);
                return action.task;            
            default:
                  return state;
      }

}

export default itemEditting;