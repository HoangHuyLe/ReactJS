import { combineReducers } from 'redux';
import products from './products';
import productEditting from './productEditting';

const appReducers = combineReducers({
      products,
      productEditting
});

export default appReducers;