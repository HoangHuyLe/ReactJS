import * as types from '../../constants/ManageWork/ActionTypes';

var findIndex = (id, tasks) => {
      var result = -1;
      tasks.forEach((task, index) => {
            if (id === task.id) {
                  result = index
                  return result;
            }
      })
      return result;
}

var inintialState = [];

var tasksReducer = (state = inintialState, action) => {
      let index = -1;
      switch (action.type) {
            case types.FETCH_TASK:
                  return [...state];
            case types.FETCH_TASK_SUCCESS:
                  state = action.payload.data;
                  return [...state];
            case types.FETCH_TASK_FAILED:
                  return [...state];
            case types.LIST_ALL:
                  return [...state];
            case types.SAVE_TASK:
                  return [...state];
            case types.SAVE_TASK_SUCCESS:
                  // 2 case: Add task and Editting task                  
                  var task = {
                        id: action.task.id,
                        name: action.task.name,
                        status: action.task.status
                  }
                  index = findIndex(task.id, state);
                  // case Add task                  
                  if (index === -1) {
                        state.push(task);
                  }
                  // case Editting
                  else {
                        state[index] = task;
                  }
                  return [...state];
            case types.SAVE_TASK_FAILED:
                  console.log(action.error);
                  return [...state];
            case types.DELETE_TASK:
                  return [...state];
            case types.DELETE_TASK_SUCCESS:
                  index = findIndex(action.id, state);
                  if (index !== -1) {
                        state.splice(index, 1); // index: start position, 1: number elem delete                      
                  }
                  return [...state];
            case types.DELETE_TASK_FAILED:
                  console.log(action.error);
                  return [...state];
            case types.UPDATE_STATUS_TASK:                  
                  return [...state];
            case types.UPDATE_STATUS_TASK_SUCCESS:
                  index = findIndex(action.id, state);
                  if (index !== -1) {
                        state[index] = {
                              ...state[index],
                              status: !state[index].status
                        }
                  }
                  return [...state];
            case types.UPDATE_STATUS_TASK_FAILED:
                  console.log(action.error);
                  return [...state];
            default:
                  return state;
      }

}

export default tasksReducer;


// var s4 = () => {
//       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };

// var generateID = () => {
//       return s4() + s4() + s4() + s4();
// };