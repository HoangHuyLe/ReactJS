import * as types from './../constants/ActionType';

var initialState = [

]

const card = (state = initialState, action) => {
      switch (action.type) {
            case types.ADD_TO_CARD:
                  state = addToCart(state, action.product);
                  return [...state];
            case types.DELETE_PRODUCT_IN_CART:
                  state = deleteProduct(state, action.productId);
                  return [...state];
            case types.UPDATE_PRODUCT_IN_CART:
                  state = updateProduct(state, action.productId, action.quantityUpdate)
                  return [...state];
            default:
                  return [...state];
      }
}

var addToCart = (cart, product) => {
      for (var i = 0; i < cart.length; i++) {
            // Product co san trong cart
            if (product.id === cart[i].product.id) {
                  cart[i].quantity += 1;
                  return cart;
            }
      }
      // Product chua co trong cart
      cart.push({ product, quantity: 1 });
      return cart;
}

var deleteProduct = (cart, productId) => {
      if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                  if (productId === cart[i].product.id) {
                        cart.splice(i, 1);
                        return cart;
                  }
            }
      }
      return cart;
}

var updateProduct = (cart, productId, quantityUpdate) => {
      if (quantityUpdate > 0) {
            for (var i = 0; i < cart.length; i++) {
                  if (productId === cart[i].product.id) {
                        cart[i].quantity = quantityUpdate;
                        return cart;
                  }
            }
      }
      else {
            return cart;
      }
}

export default card;