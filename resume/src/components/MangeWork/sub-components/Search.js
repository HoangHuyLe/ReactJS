import React from 'react';
import * as actions from './../../../actions/ManageWork/index';
import { connect } from 'react-redux';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameSearch: ""
        }
    }

    onChange = (event) => {
        this.setState({
            nameSearch: event.target.value,
        })
    }

    onShowList = () => {
        this.props.onSearch("");
        this.props.onShowList(true);
    }

    onSearch = () => {
        this.props.onSearch(this.state.nameSearch);
        this.props.onShowList(false);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="nameSearch"
                        value={this.state.nameSearch}
                        onChange={this.onChange}
                    />

                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search"></i> Tìm </button>
                    </span>
                    <span className="input-group-btn">
                    </span>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" onClick={this.onShowList}>Danh sách</button>
                    </span>


                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword));
        },
        onShowList: (value) => {
            dispatch(actions.showList(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(Search);
