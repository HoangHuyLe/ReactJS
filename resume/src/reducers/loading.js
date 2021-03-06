import {SHOW_LOADING, HIDE_LOADING} from '../constants/index';

var innitialState = false;

const loading = (state=innitialState, action)=>{
      switch (action.type){
            case SHOW_LOADING:
                  return true;
            case HIDE_LOADING:
                  return false;
            default:
                  return state;
      }
}

export default loading;