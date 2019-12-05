import * as types from '../../constants/ManageWork/ActionTypes';

var inintialState = {
      name : '',
      status : -1
};

var filterTable = (state = inintialState, action) => {
      switch(action.type){
            case types.FILTER_TABLE:                                
                  return {
                        name : action.filter.name,
                        status : parseInt(action.filter.status)
                  };
            default:
                  return state;
      }

}

export default filterTable;