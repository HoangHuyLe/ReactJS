import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './editTask';
import filterTable from './filterTable';
import searchTask from './searchTask';
import showList from './showList';
import sort from './sortTask';

const ManageWork_Reducer = combineReducers({
      tasks : tasksReducer,
      isDisplayForm,
      itemEditting,
      filterTable,
      searchTask,
      showList,
      sort
});

export default ManageWork_Reducer;