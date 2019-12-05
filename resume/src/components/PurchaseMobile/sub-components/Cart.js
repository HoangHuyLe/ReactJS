
import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá (VND)</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng (VND)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.props.children}</tbody>
                </table>

            </div>
        )
    }

}

export default Cart;
