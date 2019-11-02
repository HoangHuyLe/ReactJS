import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import isDisplayForm from './isDisplayForm';

const myReducer = combineReducers({
      tasks : tasksReducer,
      isDisplayForm,
});

export default myReducer;