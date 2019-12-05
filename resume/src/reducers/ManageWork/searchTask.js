import * as types from '../../constants/ManageWork/ActionTypes';

var inintialState = "";

var searchTask = (state = inintialState, action) => {
      switch(action.type){
            case types.SEARCH_TASK:
                  return action.keyword;
            default:
                  return state;
      }

}

export default searchTask;