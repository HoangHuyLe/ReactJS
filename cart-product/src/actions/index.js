import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) =>{
      return {
            type : types.ADD_TO_CARD,
            product,
            quantity
      }
}

export const actChangeMessage = (message) =>{
      return {
            type: types.CHANGE_MESSAGE,
            message
      }
}

export const actDeleteProductInCart = (productId) =>{
      return {
            type: types.DELETE_PRODUCT_IN_CART,
            productId
      }
}

export const actUpdateProductInCart = (productId, quantityUpdate) =>{
      return {
            type: types.UPDATE_PRODUCT_IN_CART,
            productId,
            quantityUpdate
      }
}