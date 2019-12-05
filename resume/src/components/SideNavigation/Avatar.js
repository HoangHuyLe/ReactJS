import React, { Component } from 'react';

// Import antd component
import { Card } from 'antd';
// Import css
import './../../assets/css/views/Overview/avatar.css';

const avatar = require('./../../assets/img/avatar.jpg');

class SideBar extends Component {

    render() {
        return (
            <div className = "avatar">
                <Card
                    cover={<img alt="avatar" src={avatar} />}
                    bordered={false}

                >
                    <Card.Meta title="Le Hoang Huy" />
                </Card>
            </div>

        );
    }
}

export default SideBar;
