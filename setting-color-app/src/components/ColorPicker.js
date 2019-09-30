import React, { Component } from 'react';

class ColorPicker extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            colors : ["red", "green", "blue", "gray"]
        }
    }

    setStyle(color){
        return {
            backgroundColor : color,
            padding: 20,
            display: 'inline-block',
            marginLeft: 10
        };
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }


    render() {

        var elmColors = this.state.colors.map((color, index) => {
            return <span
                key = {index}
                style = {this.setStyle(color)}
                className = {this.props.color === color ? 'active' : ''}
                onClick={() => this.setActiveColor(color)}
            >
            </span>
        })

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {elmColors}
                </div>
            </div>
        )
    }
}

export default ColorPicker;

