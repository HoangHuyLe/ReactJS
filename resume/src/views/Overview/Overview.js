import React, { Component } from 'react';
// Import core component
import PersonalInfor from './../../components/PersonalInfor/PersonalInfor';
import Aboutme from './../../components/Aboutme/Aboutme';
// Import antd components
import { Row, Col } from 'antd';
import SkillsChart from '../../components/SkillsChart/SkillsChart';

class Overview extends Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={16}>
                        <Aboutme />
                    </Col>
                    <Col span={8} >
                        <PersonalInfor />
                        <SkillsChart />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Overview;
