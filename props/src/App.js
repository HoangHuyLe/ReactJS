import React, { Component } from 'react';
import Product from "./components/Product"

class App extends Component {

  render() {
    var products = [
      {
        id: 1,
        name: "Iphone 6",
        image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
        price: 100000,
        status: true
      },
      {
        id: 2,
        name: "Iphone 7",
        image: "https://sudospaces.com/mobilecity-vn/images/2019/01/iphone-7-plus-jetblack.jpg",
        price: 100000,
        status: true
      },
      {
        id: 3,
        name: "Iphone 8",
        image: "https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459060591822074_1.jpg",
        price: 100000,
        status: true
      },
    ];

    let elements = products.map((product, index) =>{
      return (
        <Product
          key = {product.id}
          image = {product.image}
          name = {product.name}
          price = {product.price}
        />
      )
    }
    
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-3">
            {elements}      
          </div>
        </div>
      </div>    
    );
  }
}

export default App;
