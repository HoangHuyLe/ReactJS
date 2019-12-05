import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

const PurchaseMobile_Reducer = combineReducers({
      products,
      cart,
      message
});

export default PurchaseMobile_Reducer;