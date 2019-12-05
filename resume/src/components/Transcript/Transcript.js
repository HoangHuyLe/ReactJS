import React, { Component } from 'react';
// Import css
import './../../assets/css/views/Education/education.css';
// Import antd components
import { Divider } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const transcript1 = require('./../../assets/img/transcript1.PNG');
const transcript2 = require('./../../assets/img/transcript2.PNG')
const transcript3 = require('./../../assets/img/transcript3.PNG')
const transcript4 = require('./../../assets/img/transcript4.PNG')
const transcript5 = require('./../../assets/img/transcript5.PNG')
const transcript6 = require('./../../assets/img/transcript6.PNG')
const transcript7 = require('./../../assets/img/transcript7.PNG')

class Transcript extends Component {

    render() {

        return (
            <div className="mycontainer">
                <div className="title-component">
                    <span>University Academy Transcript</span>
                </div>
                <Divider />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="2015-2016" key="1">
                        <img style={{ width: '100%', height: 'auto' }} src={transcript1} alt="transcript 15-16 semester 1" />
                        <p></p>
                        <img style={{ width: '100%', height: 'auto' }} src={transcript2} alt="transcript 15-16 semester 2" />
                    </TabPane>
                    <TabPane tab="2016-2017" key="2">
                        <img style={{ width: '100%', height: 'auto' }} src={transcript3} alt="transcript 16-17 semester 1" />
                        <p></p>
                        <img style={{ width: '100%', height: 'auto' }} src={transcript4} alt="transcript 16-17 semester 2" />
                    </TabPane>
                    <TabPane tab="2017-2018" key="3">
                        <img style = {{width:'100%', height:'auto'}} src = {transcript5} alt="transcript 17-18 semester 1" />
                        <p></p>
                        <img style = {{width:'100%', height:'auto'}} src = {transcript6} alt="transcript 17-18 semester 2" />
                    </TabPane>
                    <TabPane tab="2018-2019" key="4">
                        <img style = {{width:'100%', height:'auto'}} src = {transcript7} alt="transcript 18-19 semester 1" />                        
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Transcript;