import {combineReducers} from 'redux';
import ManageWork_Reducer from './ManageWork';
import PurchaseMobile_Reducer from './PurchaseMobile';
import loading from './loading';
import auth from './auth';

const rootReducer = combineReducers({
     ManageWork_Reducer,
     PurchaseMobile_Reducer,
     loading,
     auth
});

export default rootReducer;