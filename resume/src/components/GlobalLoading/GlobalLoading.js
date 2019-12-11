import React, { Component } from 'react';
import LoadingIcon from './../../assets/img/loading.gif';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
    render() {
        const { loading } = this.props;
        let result = null;
        if (loading) {
            result =
                <div className='global-loading'>
                    <img src={LoadingIcon} alt="loading" />
                </div>
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(GlobalLoading);