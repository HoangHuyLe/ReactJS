import React from 'react';

class ProductActionPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Tên sản phẩm: </label>
                                <input type="text" className="form-control" id="" placeholder="Nhập tên sản phẩm" />
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input type="text" className="form-control" id="" placeholder="Nhập giá" />
                            </div>
                            <div className="form-group">
                                <label>Trạng thái: </label>
                                <input type="text" className="form-control" id="" placeholder="Nhập trạng thái" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="" /> Còn hàng                                    
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>                                    
                                    <input type="checkbox" value="" /> Hết hàng
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductActionPage;
