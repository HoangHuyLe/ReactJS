import React from 'react';

class Sort extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            sortBy: 'name',
            sortValue : 1
        }
    }
    onClick = (sortBy, sortValue)=>{
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        });
        this.props.onSort(sortBy, sortValue)
    }

    render() {
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp xếp <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={()=>this.onClick('name', 1)}>
                            <span className="">
                                <i className="fas fa-sort-alpha-down"></i>
                                Tên A-Z
                                
                                {(this.state.sortBy === 'name' && this.state.sortValue === 1)? <i className="fas fa-check"></i> : ''}
                            </span>
                        </li>
                        <li onClick={()=>this.onClick('name', -1)}>
                            <span className="">
                                <i className="fas fa-sort-alpha-up"></i>
                                Tên Z-A
                                {(this.state.sortBy === 'name' && this.state.sortValue === -1)? <i className="fas fa-check"></i> : ''}
                            </span>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={()=>this.onClick('status', 1)}>
                             Trạng thái kích hoạt
                             {(this.state.sortBy === 'status' && this.state.sortValue === 1)? <i className="fas fa-check"></i> : ''}
                        </li>
                        <li onClick={()=>this.onClick('status', -1)} > 
                            Trạng thái ẩn
                            {(this.state.sortBy === 'status' && this.state.sortValue === -1)? <i className="fas fa-check"></i> : ''}
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sort;