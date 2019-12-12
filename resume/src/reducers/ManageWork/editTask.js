import * as types from '../../constants/ManageWork/ActionTypes';

var inintialState = {
      id : '',
      name: '',
      status: false
};

var itemEditting = (state = inintialState, action) => {
      switch (action.type) {
            case types.EDIT_TASK:                             
                  return action.task;            
            default:
                  return state;
      }
}

export default itemEditting;