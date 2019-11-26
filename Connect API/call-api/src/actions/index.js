import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const actFetchProductsRequest = () => {
      return (dispatch) => {
            return callApi('products', 'GET', null).then(
                  respone => {
                        dispatch(actFetchProducts(respone.data))
                  }
            )
      }
}

export const actDeleteProductsRequest = (id) => {
      return (dispatch) => {
            return callApi(`products/${id}`, 'DELETE', null).then(
                  respone => {
                        if (respone.status === 200) {
                              dispatch(actDeleteProduct(id))
                        }
                  }
            )
      }
}

export const actAddProductsRequest = (product) => {
      return (dispatch) => {
            return callApi('products', 'POST', product).then(respone => {
                  dispatch(actAddProduct(respone.data));
            })
      }
}

export const actUpdateProductsRequest = (product) => {
      return (dispatch) => {
            return callApi(`products/${product.id}`, 'PUT', product).then(respone => {
                  dispatch(actUpdateProduct(product));
            })
      }
}

export const actGetProductRequest = (id) => {
      return (dispatch) => {
            return callApi(`products/${id}`, 'GET', null).then(
                  respone => {
                        dispatch(actUpdateForm(respone.data))
                  }
            )
      }
}

// --------------------------------------------------------

export const actFetchProducts = (products) => {
      return {
            type: Types.FETCH_PRODUCTS,
            products
      }
}

export const actDeleteProduct = (id) => {
      return {
            type: Types.DELETE_PRODUCT,
            id
      }
}

export const actAddProduct = (product) => {
      return {
            type: Types.ADD_PRODUCTS,
            product
      }
}

export const actUpdateProduct = (product) => {
      return {
            type: Types.UPDATE_PRODUCT,
            product
      }
}

export const actUpdateForm = productEditting => {
      return {
            type: Types.UPDATE_FORM,
            productEditting
      }
}
