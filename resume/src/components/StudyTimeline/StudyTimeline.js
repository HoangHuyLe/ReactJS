import React, { Component } from 'react';
// Import css
import './../../assets/css/views/Education/education.css';
// Import antd components
import { Timeline } from 'antd';
import { Tag } from 'antd';
import { Divider } from 'antd';

class StudyTimeline extends Component {

      render() {
            return (
                  <div className="mycontainer">
                        <div className="title-component">
                              <span>Study Timeline</span>
                        </div>
                        <Divider />
                        <Timeline>
                              <Timeline.Item >
                                    <Tag color="blue">2003 - 2008</Tag>
                                    <span className='itemTitle'> Primary school  </span>
                                    <p className="itemContent" >
                                          Trieu Dong Primary School
                                    </p>
                                    <p className="itemContent" >
                                          Ranked academic: 4 year in very good student; 1 year in good student
                                    </p>
                              </Timeline.Item>
                              <Timeline.Item color="orange">
                                    <Tag color="orange">2008 - 2012</Tag>
                                    <span className='itemTitle'> Junior High school </span>
                                    <p className="itemContent" >
                                          Trieu Dong Junior High School
                                    </p>
                                    <p className="itemContent" >
                                          Ranked academic: 4 year in very good student
                                    </p>
                              </Timeline.Item>
                              <Timeline.Item >
                                    <Tag color="blue">2012 - 2015</Tag>
                                    <span className='itemTitle'> High school  </span>
                                    <p className="itemContent" >
                                          Quang Tri Town High School.
                                    </p>
                                    <p className="itemContent" >
                                          Ranked academic: 2 year in very good student; 1 year in good student
                                    </p>
                              </Timeline.Item>
                              <Timeline.Item color="orange">
                                    <Tag color="orange"> Since 2015 </Tag>
                                    <span className='itemTitle'> University </span>
                                    <p className="itemContent" >
                                          Ho Chi Minh City University of Technology.
                                    </p>
                                    <p className="itemContent" >
                                          Ranked academic: 3 year in good student
                                    </p>
                                    <p className="itemContent" >
                                          Expected graduation: November 2020
                                    </p>                                    
                              </Timeline.Item>

                        </Timeline>
                  </div>
            );
      }
}

export default StudyTimeline;