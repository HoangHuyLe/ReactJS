import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import Payment from '../components/Payment';

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

    showCartItem = (cart) =>{
        var result = <tr><th>{Message.MSG_CART_EMPTY}</th></tr>;
        if (cart.length > 0){
            result = cart.map((item, index)=>{
                return (
                    <CartItem
                        key = {index}
                        item = {item}                        
                    />
                )
            })
        }
        return result;
    } 
   
    showPayment = (cart) =>{
        if(cart.length > 0){
            return <Payment cart={cart}/>
        }
        return null;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }),
        quantity : PropTypes.number.isRequired
    })       
    ).isRequired // Bat buoc phai có
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);
