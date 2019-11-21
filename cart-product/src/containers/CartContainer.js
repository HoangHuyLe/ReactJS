import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import Payment from '../components/Payment';
import {actDeleteProductInCart} from './../actions/index';

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
        var {onDeleteProductInCart} = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        onDeleteProductInCart = {onDeleteProductInCart}
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
    onDeleteProductInCart  : PropTypes.func
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
