import * as types from '../../constants/PurchaseMobile/ActionType';
import * as messages from './../../constants/PurchaseMobile/Message';

var initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {      
      switch (action.type) {
            case types.CHANGE_MESSAGE:
                  state = action.message;                        
                  return state;
            default:
                  return state;
      }
}


export default message;