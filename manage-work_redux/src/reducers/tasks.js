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

var inintialState = [

];

var tasksReducer = (state = inintialState, action) => {
      let index = -1;
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
                  return [...state];
            case types.UPDATE_STATUS_TASK:
                  index = findIndex(action.id, state);
                  if (index !== -1) {
                        state[index] = {
                              ...state[index],
                              status: !state[index].status
                        }
                  }
                  return [...state];
            case types.DELETE_TASK:
                  index = findIndex(action.id, state);
                  if (index !== -1) {
                        state.splice(index, 1); // index: start position, 1: number elem delete                      
                  }
                  return [...state];
            default:
                  return state;
      }

}

export default tasksReducer;



  // onUpdate = (id) => {
  //   let index = this.findIndex(id);
  //   let { tasks } = this.state;
  //   let taskEditing = tasks[index];
  //   this.setState({
  //     taskEditing: taskEditing,
  //   })

  //   this.onShowForm();
  // }