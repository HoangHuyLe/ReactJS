import * as types from '../constants/ActionTypes';

var inintialState = false;

var showList = (state = inintialState, action) => {
      switch(action.type){
            case types.SHOW_LIST:
                  return action.value;
            default:
                  return state;
      }

}

export default showList;