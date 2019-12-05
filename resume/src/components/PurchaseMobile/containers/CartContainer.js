import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../sub-components/Cart';
import * as Message from './../../../constants/PurchaseMobile/Message';
import CartItem from '../sub-components/CartItem';
import Payment from '../sub-components/Payment';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from './../../../actions/PurchaseMobile/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showPayment(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var result = <tr><th>{Message.MSG_CART_EMPTY}</th></tr>;
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                )
            })
        }
        return result;
    }

    showPayment = (cart) => {
        if (cart.length > 0) {
            return <Payment cart={cart} />
        }
        return null;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    })
    ).isRequired ,    
    onDeleteProductInCart  : PropTypes.func,
    onChangeMessage : PropTypes.func
}

const mapStateToProps = state => {
    return {
        cart: state.PurchaseMobile_Reducer.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProductInCart : (productId) =>{
            dispatch(actDeleteProductInCart(productId))
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart : (productId, quantityUpdate) =>{
            dispatch(actUpdateProductInCart(productId, quantityUpdate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
