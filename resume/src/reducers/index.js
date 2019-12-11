import {combineReducers} from 'redux';
import ManageWork_Reducer from './ManageWork';
import PurchaseMobile_Reducer from './PurchaseMobile';
import loading from './loading';

const rootReducer = combineReducers({
     ManageWork_Reducer,
     PurchaseMobile_Reducer,
     loading
});

export default rootReducer;