import * as types from './../constants/ActionTypes';

var s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
      return s4() + s4() + s4() + s4();
};

var data = [
      {
            id: generateID(),
            name: 'Hoc Lap Trinh',
            status: true,
      },
      {
            id: generateID(),
            name: 'Hoc HTML',
            status: true,
      },
      {
            id: generateID(),
            name: 'Hoc CSS',
            status: false,
      }
];

var inintialState = [

];

var tasksReducer = (state = inintialState, action) => {
      switch (action.type) {
            case types.LIST_ALL:
                  return state;
            case types.ADD_TASK:
                  var newTask = {
                        id: generateID(),
                        name: action.task.name,
                        status: action.task.status === true ? true : false
                  }
                  state.push(newTask);
                  return [...state];
            case types.GEN_TASK:                 
                  state = data;
                  return state;
            default:
                  return state;
      }

}

export default tasksReducer;