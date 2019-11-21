import React, {Component} from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component{
    render(){
        var {item} = this.props;
        
        return (
            <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a href="/#">—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a href="/#">+</a>
                    </label>
                </div>
            </td>
            <td>{this.evalTotal(item.quantity, item.product.price)} </td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick = {() => this.onDeleteProduct(item.product.id)}>
                    X
                </button>
            </td>
        </tr>
        
        )
    }

    evalTotal= (quantity, price) =>{
        return (quantity * price);
    }

    onDeleteProduct = (productId) => {
        this.props.onDeleteProductInCart(productId);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
        console.log(this.props.onChangeMessage);
    }
}

export default CartItem;
