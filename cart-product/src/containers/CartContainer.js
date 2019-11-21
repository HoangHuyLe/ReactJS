import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import Payment from '../components/Payment';
import {actDeleteProductInCart, actChangeMessage} from './../actions/index';

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
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
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
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProductInCart : (productId) =>{
            dispatch(actDeleteProductInCart(productId))
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
