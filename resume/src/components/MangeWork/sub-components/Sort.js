import React from 'react';
import * as actions from './../../../actions/ManageWork/index';
import { connect } from 'react-redux';

class Sort extends React.Component {

    onClick = (sortBy, sortValue)=>{
        this.props.onSort({
            by : sortBy,
            value : sortValue
        })
    }

    render() {
        var sort = this.props.sort; 

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
                                
                                {(sort.by === 'name' && sort.value === 1)? <i className="fas fa-check"></i> : ''}
                            </span>
                        </li>
                        <li onClick={()=>this.onClick('name', -1)}>
                            <span className="">
                                <i className="fas fa-sort-alpha-up"></i>
                                Tên Z-A
                                {(sort.by === 'name' && sort.value === -1)? <i className="fas fa-check"></i> : ''}
                            </span>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={()=>this.onClick('status', 1)}>
                             Trạng thái kích hoạt
                             {(sort.by === 'status' && sort.value === 1)? <i className="fas fa-check"></i> : ''}
                        </li>
                        <li onClick={()=>this.onClick('status', -1)} > 
                            Trạng thái ẩn
                            {(sort.by === 'status' && sort.value === -1)? <i className="fas fa-check"></i> : ''}
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        sort : state.ManageWork_Reducer.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
