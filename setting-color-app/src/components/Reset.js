import React, { Component } from 'react';

class Reset extends Component {

      onResetDefault = () => {
            this.props.isReSet();
      }

      render() {
            return (
                 <div>
                       <button type="button" className="btn btn-primary" onClick= {this.onResetDefault}>Reset</button>
                 </div>
            )
      }

}

export default Reset;
