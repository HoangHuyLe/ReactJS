import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';

const myReducer = combineReducers({
      tasks : tasksReducer,
      isDisplayForm,
      editTask,
});

export default myReducer;