import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Import antd component
import { Typography, Divider } from 'antd';

const { Paragraph, Title } = Typography;

class Aboutme extends Component {

      render() {
            return (
                  <div className="mycontainer">
                        <div className="title-component">
                              <span>About me</span>
                        </div>
                        <Divider />
                        <div>
                              <Title level={4}>Education</Title>
                              <Paragraph >
                                    Now I'm Senior student in Bach Khoa University, majoring in Computor Science. Related to IT, I learned subjects: Computer Architecture (8.5), OOP (8.0),
                                    Data Structure and Algorithms (6.0), Operating System (8.0), Math Modeling (8.5), Database System (8.5), Networking (8.0), Cryptopgraphy and Security (6.0),
                                    Programing Language Principle(5.0)
                                    <br/> 
                                    Expected graduation year: 11/2020.
                                    <br/>
                                    Detail my progress education you can see <Link to='/education'>here</Link>.                                    
                              </Paragraph>
                              
                        </div>
                        <div>
                              <Title level={4}>Personality</Title>
                              <Paragraph >
                                    I’m a generous and easy-going person but when it comes to working I’m a competitive person.
                                    I work not fast but meticulous because I want to understand the any encountered problems and spend times to check my result.
                                    Currently, my career orientaion is becoming a Full Stack Web Developer with main Language is Reactjs, Nodejs, MongoDB. Next, I want to learn more 
                                    about React Native and Flutter to developint mobile app. In the future (about 5 years), I want to go abroad to work for new experiences and to accomplish that
                                    goal, I am learning English every day.                      
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Interests</Title>
                              <Paragraph >
                                    Learning logistic subject such as Math, Programing; one of place I like to train my logical thinking is HackerRank. Moreover, I like playing game; 
                                    playing football; listening music. Especiallym, I like paper cutting art Kirigami. Here are some my  
                                    <a href="https://drive.google.com/open?id=1ky-rNm1vq0ey954yUb-_Q8a01ipIWVAU"> products</a>. 
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Objective</Title>
                              <Paragraph >
                                    I want to improve my skills and experience about Reactjs, Nodejs in workplace environment with real project of company. I hope to contribute some efort to
                                    the development of the company.
                              </Paragraph>
                        </div>
                        <div>
                              <Title level={4}>Another Skills</Title>
                              <Paragraph >
                                    English: I can read and understand english document; Search by english; <br/>
                                    Teamwork: I always make effort to complete my task and quite well communicate with teamate. But I am not a good Team Leader. <br/>
                                    Git: I user git hub to save my source code but nerver do it in team.
                              </Paragraph>
                        </div>
                  </div>
            );
      }
}

export default Aboutme;