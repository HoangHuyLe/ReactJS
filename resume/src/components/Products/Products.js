import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Import css
import './../../assets/css/views/Experience/experience.css';
// Import antd components
import { Card, Col, Row } from 'antd';


class Products extends Component {

    render() {

        return (
            <div className="products">
                <div className="title-component">
                    <span>Some simple products</span>
                </div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Resume" bordered={true}>
                            <p> <b>Used technology: </b> ReactJS, React Router, Redux, Redux Saga, Mock API with mocAPI and axios, Ant Design </p>
                            <p> <b>Source code: </b>
                                <a href='https://github.com/HoangHuyLe/ReactJS/tree/master/resume' target="_blank" rel="noopener noreferrer">
                                    source code
                                </a>
                            </p>
                            <p> <b>Link</b></p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Manage Work" bordered={true}>
                            <p> <b>Used technology:</b> ReactJS, Redux, Redux-saga, React-toastify, Mock API with mockAPI and axios, Bootstrap 3, Ant design </p>
                            <p> <b>Description:</b> </p>
                            <ul>
                                <li>Show loading when connect API</li>
                                <li>Add a new work</li>
                                <li>Update status work</li>
                                <li>Edit and delete a work</li>
                                <li>Search, Filter and Sort</li>
                                <li>Authentication</li>                                 
                            </ul>
                            <p> <b>Source code: </b>
                                <a href='https://github.com/HoangHuyLe/ReactJS/tree/master/resume' target="_blank" rel="noopener noreferrer">
                                    source code
                                </a>
                            </p>
                            <p> <Link to="/experience/apps/manage-work" >Show App</Link></p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Purchase Mobile Online" bordered={true}>
                            <p> <b>Used technology:</b> ReactJS, Redux (Container Components), Bootstrap 3, Ant design </p>
                            <p> <b>Description:</b> </p>
                            <ul>
                                <li>Add products to cart</li>
                                <li>Adjust quantity of product</li>
                                <li>Delete product in cart</li>
                                <li>Payment (Updating)</li>
                            </ul>
                            <p> <b>Source code: </b>
                                <a href='https://github.com/HoangHuyLe/ReactJS/tree/master/cart-product' target="_blank" rel="noopener noreferrer">
                                    source code
                                </a>
                            </p>
                            <p> <Link to="/experience/apps/purchase-mobile">Show App</Link></p>
                        </Card>
                    </Col>
                </Row>
            </div >

        );
    }
}

export default Products;