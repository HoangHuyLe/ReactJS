import React, { Component } from 'react';
// Import css
import './../../assets/css/commons.css';
// Import antd component
import { Typography, Divider } from 'antd';

const { Paragraph, Title } = Typography;

class Aboutme extends Component {

      render() {
            return (
                  <div className="container">
                        <div className="title-component">
                              <span>About me</span>
                        </div>
                        <Divider />
                        <div>
                              <Title level={4}>Education</Title>
                              <Paragraph >
                                    Now I'm Senior student in Bach Khoa University, majoring in Computor Science. Expected graduation year: 11/2020.
                                    Detail my progress education you can see <a href='/#'>here</a>.                                    
                              </Paragraph>
                              
                        </div>
                        <div>
                              <Title level={4}>Personality</Title>
                              <Paragraph >
                                    I’m a generous and easy-going person but when it comes to working I’m a competitive person.
                                    I work not fast but meticulous because I want to understand the any encountered problems and spend times to check my result.
                                    My dream is becoming an IT engineer, earn a lot of money to take care of my parents and go travel.
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Interests</Title>
                              <Paragraph >
                                    Learning logistic subject; playing game; programming; playing football; listening Japan music and play guitar.
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Objective</Title>
                              <Paragraph >
                                    I want to train my skills and experience workplace environment. I want to recruit React developer.
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Another Skills</Title>
                              <Paragraph >
                                    English and teamwork
                              </Paragraph>
                        </div>
                  </div>
            );
      }
}

export default Aboutme;