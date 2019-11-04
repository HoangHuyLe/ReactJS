import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './editTask';

const myReducer = combineReducers({
      tasks : tasksReducer,
      isDisplayForm,
      itemEditting,
});

export default myReducer;