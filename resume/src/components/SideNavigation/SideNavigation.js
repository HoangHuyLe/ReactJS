import React, { Component } from 'react';

// Import core component
import Avatar from './Avatar';
import MenuSide from './MenuSide';
// Import antd component
import { Layout } from 'antd';
import { Divider } from 'antd';
// Import css
import "./../../assets/css/components/SideNavigation/side-navigation.css";

const { Sider } = Layout;

class SideBar extends Component {   

    render() {
        return (
            <div className="side-bar">
                <Sider collapsedWidth="0" style={{ opacity: 0.75, height: '100vh', overflow: 'auto', }} >
                    <Avatar />
                    <Divider />
                    <MenuSide />
                </Sider>                
            </div>
        );
    }
}

export default SideBar;
