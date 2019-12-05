import React, { Component } from 'react';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';


class PurchaseMobile extends Component {
    render() {
        return (
            <div>                
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>                
            </div>
        )
    }
}

export default PurchaseMobile;