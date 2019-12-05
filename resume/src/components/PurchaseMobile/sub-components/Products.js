import React, { Component } from 'react';
// Import antd design
import { Row } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

class Products extends Component {
    render() {
        return (
            <div>
                <Title className='text-center' level={1}>Mua bán điện thoại online</Title>
                <Title className='text-center' level={2}>Danh sách sản phẩm</Title>                
                <Row gutter={16}>
                    {this.props.children}
                </Row>
            </div>

        )
    };
}

export default Products;
