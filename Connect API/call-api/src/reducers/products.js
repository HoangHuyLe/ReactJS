import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
      switch (action.type) {
            case Types.FETCH_PRODUCTS:
                  state = action.products;
                  return [...state];
            case Types.DELETE_PRODUCT:
                  state = deleteProduct(state, action.id);
                  return [...state]
            case Types.ADD_PRODUCTS:
                  state.push(action.product);
                  return [...state]
            case Types.UPDATE_PRODUCT:
                  state = updateProduct(state, action.product);
                  return [...state]
            default:
                  return [...state];
      }
}

var deleteProduct = (products, id) => {
      let index = findIndex(products, id);
      if (index !== -1){
            products.splice(index, 1)
      }      
      return products;
}

var updateProduct = (products, product) => {
      let index = findIndex(products, product.id);
      if ( index !== -1){
            products[index].name = product.name;
            products[index].price = product.price;
            products[index].status = product.status;
      }
      return products;
}

var findIndex = (products, id) => {
      let index = -1;
      if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                  if (id === products[i].id) {
                        index = i;
                        break;
                  }
            }
      }
      return index;
}


export default products;