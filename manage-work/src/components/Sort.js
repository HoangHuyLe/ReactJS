import React from 'react';

class Sort extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp xếp <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li> Tên A-Z</li>
                        <li> Tên Z-A</li>
                        <li role="separator" className="divider"></li>
                        <li> Trạng thái kích hoạt</li>
                        <li> Trạng thái ẩn</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sort;