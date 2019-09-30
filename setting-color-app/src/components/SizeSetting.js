import React, { Component } from 'react';

class SizeSetting extends Component {

      setSize(value){
           this.props.onReceiveSize(value);
      }

      render() {
            return (
                  <div className="panel panel-warning">
                        <div className="panel-heading">
                              <h3 className="panel-title">Size: {this.props.fontsize}</h3>
                        </div>
                        <div className="panel-body">
                              <button type="button" className="btn btn-success" style={{marginRight: 10+ 'px'}} onClick = {()=>this.setSize(-2)}>
                                    Giảm
                              </button>
                              <button type="button" className="btn btn-success" onClick = {()=>this.setSize(+2)}>Tăng</button>
                        </div>
                  </div>
            )
      }

}

export default SizeSetting;
