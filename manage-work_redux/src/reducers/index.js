import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './editTask';
import filterTable from './filterTable'

const myReducer = combineReducers({
      tasks : tasksReducer,
      isDisplayForm,
      itemEditting,
      filterTable
});

export default myReducer;