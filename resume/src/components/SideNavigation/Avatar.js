import React, { Component } from 'react';

// Import antd component
import { Card } from 'antd';
// Import css
import './../../assets/css/components/SideNavigation/avatar.css';

const avatar = require('./../../assets/img/avatar.jpg');

class SideBar extends Component {

    render() {
        return (
            <Card                
                cover={<img alt="avatar" src={avatar} />}                
                bordered={false}
            >
                <Card.Meta title="Le Hoang Huy"/>
                {/* <div className="title">
                    Le Hoang Huy               
                </div> */}
            </Card>
        );
    }
}

export default SideBar;
