import React, { Component } from 'react';
// Import antd component
import { Row, Col, Divider, Button } from 'antd';

class PersonalInfor extends Component {

    render() {
        return (
            <div className="mycontainer">
                <div className="title-component">
                    <span>Personal Information</span>
                </div>
                <Divider />                
                <Row className="itemInfor">
                    <Col span={2} ><i className="fas fa-user"></i></Col>
                    <Col span={22}><span>Le Hoang Huy</span></Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fas fa-birthday-cake"></i></Col>
                    <Col span={22}><span>17/09/1997</span></Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fas fa-map-marker-alt"></i></Col>
                    <Col span={22}><span>HCM City National University Dormitory A, Award 6, Linh Trung, Thu Duc, HCM City</span></Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fas fa-phone"></i></Col>
                    <Col span={22}><span>(+84)359633778</span></Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fas fa-envelope-square"></i></Col>
                    <Col span={22}><span>hoanghuyle1709@gmail.com</span></Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fab fa-facebook"></i></Col>
                    <Col span={22}>
                        <a href="https://www.facebook.com/lehoanghuy.97" target="_blank" rel="noopener noreferrer">
                            <span>https://www.facebook.com/lehoanghuy.97</span>
                        </a>
                    </Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fab fa-linkedin"></i></Col>
                    <Col span={22}>
                        <a href="https://www.linkedin.com/in/le-hoang-huy-623520173/" target="_blank" rel="noopener noreferrer">
                            <span>https://www.linkedin.com/in/le-hoang-huy-623520173/</span>
                        </a>
                    </Col>
                </Row>
                <Row className="itemInfor">
                    <Col span={2} ><i className="fab fa-github"></i></Col>
                    <Col span={22}>
                        <a href="https://github.com/HoangHuyLe" target="_blank" rel="noopener noreferrer">
                            <span>https://github.com/HoangHuyLe</span>
                        </a>
                    </Col>
                </Row>
                <Button type="primary" icon="download" size={'large'} block style ={{marginTop:6}}>
                    Download My Resume
                </Button>

            </div>
        );
    }
}

export default PersonalInfor;