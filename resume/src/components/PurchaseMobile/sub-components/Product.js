/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as Message from './../../../constants/PurchaseMobile/Message';
import { Card, Col, Button } from 'antd';

const { Meta } = Card;

class Product extends Component {

    render() {
        var product = this.props.product;
        return (

            <div>
                <Col span={8}>
                    <Card
                        bordered={false}
                        cover={<img src={product.image} alt="Hinh ảnh sản phẩm" />}
                    >
                        <Meta title={product.name} description={product.description} className='text-center' />
                        <div className=''>
                            <p className='mt-10 text-center'>
                                {this.showRating(product.rating)}
                            </p>
                            <p className='text-center'>
                                <span> {product.price} VND</span>                                
                                <Button type="primary" shape="circle" onClick={() => this.onAddToCart(product)} className="ml-10">
                                    <i className="fas fa-shopping-cart"></i>
                                </Button>
                            </p>
                        </div>
                    </Card>

                </Col>
            </div >
        )
    }

    showRating(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fas fa-star" aria-hidden="true"></i>)
        }
        for (var j = 1; j <= 5 - rating; j++) {
            result.push(<i key={rating + j} className="far fa-star" aria-hidden="true"></i>)
        }
        return result;
    }

    onAddToCart(product) {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

}

export default Product;
