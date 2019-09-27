import React, { Component } from 'react';

class Product extends Component {

     render() {
          return (
               <div className="row">
                    
                         <div className="img-thumbnail rounded">
                              <img alt="" />
                              <div className="caption">
                                   <img alt="" src={this.props.image} />
                                   <h3>{this.props.name}</h3>
                                   <p> {this.props.price}</p>
                              </div>
                         </div>
                    
               </div>

          );
     }
}

export default Product;
