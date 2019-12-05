import React, { Component } from 'react';

// Import core components
import Products from './../../components/Products/Products';


class Experience extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <Products match ={this.props.match}/>
            </React.Fragment>
        );
    }
}

export default Experience;