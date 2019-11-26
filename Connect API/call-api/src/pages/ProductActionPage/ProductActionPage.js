import React from 'react';
import { Link } from 'react-router-dom';
import { actAddProductsRequest, actUpdateProductsRequest, actGetProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            let id = parseInt(match.params.id);
            this.props.onUpdateForm(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nexttProps) {
        let {productEditting} = nexttProps;
        if (productEditting) {
            this.setState({
                id: productEditting.id,
                txtName: productEditting.name,
                txtPrice: productEditting.price,
                chkbStatus: productEditting.status
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault();
        var product = {
            id: this.state.id,
            name: this.state.txtName,
            price: this.state.txtPrice,
            status: this.state.chkbStatus
        }
        var history = this.props.history;

        // Truong hop chinh sua
        if (this.state.id) {
            this.props.onUpdateProduct(product)
            history.goBack();
        }
        // Truong hop them moi
        else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        console.log(this.props.productEditting)
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên sản phẩm: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên sản phẩm"
                                    name="txtName"
                                    value={this.state.txtName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá"
                                    name="txtPrice"
                                    value={this.state.txtPrice}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Trạng thái: </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="chkbStatus"
                                        value={this.state.chkbStatus}
                                        onChange={this.onChange}
                                        checked={this.state.chkbStatus}
                                    />
                                    Còn hàng
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                            <Link to='/product-list' className="btn btn-warning ml-10"> Hủy bỏ </Link>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productEditting: state.productEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductsRequest(product))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductsRequest(product))
        },
        onUpdateForm: (id) => {
            dispatch(actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
