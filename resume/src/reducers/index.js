import {combineReducers} from 'redux';
import ManageWork_Reducer from './ManageWork';
import PurchaseMobile_Reducer from './PurchaseMobile';
import loading from './loading';
import login from './login';

const rootReducer = combineReducers({
     ManageWork_Reducer,
     PurchaseMobile_Reducer,
     loading,
     login
});

export default rootReducer;