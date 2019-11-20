import * as types from './../constants/ActionType';

var initialState = [

]

const card = (state = initialState, action) => {      
      switch (action.type) {
            case types.ADD_TO_CARD:
                  state = addToCart(state, action.product);                           
                  return [...state];
            default:
                  return [...state];
      }
}

var addToCart = (cart, product) =>{
      for (var i = 0; i < cart.length; i++){
            // Product co san trong cart
            if(product.id === cart[i].product.id){
                  cart[i].quantity += 1;
                  return cart;
            }
      }
      // Product chua co trong cart
      cart.push({product, quantity : 1});      
      return cart;
}


export default card;