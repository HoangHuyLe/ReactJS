import React, { Component } from 'react';

class Message extends Component {
    render() {
        var {message} = this.props;
        return (
            <h3 className='mt-20'>
                <span type='button' className="btn btn-success"> {message} </span>
            </h3>
        )
    }

}

export default Message;
