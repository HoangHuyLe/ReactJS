import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import './App.css';


class App extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  color: 'red',
                  fontsize: 14
            }
            this.onSetColor = this.onSetColor.bind(this);
            this.onSetSize = this.onSetSize.bind(this);
            this.onSettingDefault = this.onSettingDefault.bind(this);
      }

      onSetColor(color) {
            this.setState({
                  color: color
            }
            )
      }

      onSetSize(value) {
            // 8 <= fontsize <= 36
            if (this.state.fontsize + value >= 8 && this.state.fontsize + value <= 36) {
                  this.setState({
                        fontsize: this.state.fontsize + value
                  })
            };

      }

     onSettingDefault() {
            this.setState({
                  color : 'red',
                  fontsize : 14
            })                  
            
      }

      render() {
            return (
                  <div className="container mt">
                        <div className="row ">
                              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                              </div>
                              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <SizeSetting
                                          fontsize={this.state.fontsize}
                                          onReceiveSize={this.onSetSize}
                                    />
                                    
                                    <Reset isReSet = {this.onSettingDefault} />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <Result color={this.state.color} fontsize={this.state.fontsize} />
                              </div>
                        </div>
                  </div>
            )
      }

}

export default App;
