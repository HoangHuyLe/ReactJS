import {combineReducers} from 'redux';
import ManageWork_Reducer from './ManageWork';
import PurchaseMobile_Reducer from './PurchaseMobile';

const appReducer = combineReducers({
     ManageWork_Reducer,
     PurchaseMobile_Reducer
});

export default appReducer;