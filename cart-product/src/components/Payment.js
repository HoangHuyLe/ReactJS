/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Payment extends Component {
    render() {
        var { cart } = this.props;

        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showPayment(cart)} VND</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                                <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }

    showPayment = (cart) => {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].quantity * cart[i].product.price;
        }
        return total;
    }

}

export default Payment;
