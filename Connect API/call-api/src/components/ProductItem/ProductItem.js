import React from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends React.Component {

    onDelete = (id)=>{
        if ( confirm("Bạn chắc chắc muốn xóa?")){ /*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
            this.props.onDelete(id)
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? "info" : "default";

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>

                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Sửa</Link>

                    <button type="button" className="btn btn-danger ml-10" onClick = {() => this.onDelete(product.id)}>
                        Xóa
                    </button>

                </td>
            </tr>

        )
    }
}

export default ProductItem;
