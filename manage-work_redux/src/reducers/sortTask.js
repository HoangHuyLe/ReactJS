import * as types from '../constants/ActionTypes';

var inintialState = {
      by: '',
      value: 1 // 1: increase, -1: degrease
};

var sort = (state = inintialState, action) => {
      switch (action.type) {
            case types.SORT:                  
                  return {
                        by: action.sort.by,
                        value: action.sort.value
                  };
            default:
                  return state;
      }

}

export default sort;