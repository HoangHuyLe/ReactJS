import React, { Component } from 'react';

// Import core components
import StudyTimeline from './../../components/StudyTimeline/StudyTimeline';
import Awards from './../../components/Awards/Awards';
import Transcript from './../../components/Transcript/Transcript';
// Import antd components
import { Row, Col } from 'antd';

class Education extends Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={12}>
                        <StudyTimeline />
                    </Col>
                    <Col span={12} >
                        <Awards/>
                    </Col>
                </Row>
                <Row>
                    <Transcript/>
                </Row>
            </React.Fragment>
        );
    }
}

export default Education;