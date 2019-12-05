import React, { Component } from 'react';
// Import css
import './../../assets/css/views/Education/education.css';
// Import antd components
import { Timeline } from 'antd';
import { Tag } from 'antd';
import { Divider } from 'antd';

class Awards extends Component {

      render() {
            return (
                  <div className="mycontainer">
                        <div className="title-component">
                              <span>Awards</span>
                        </div>
                        <Divider />
                        <Timeline>
                              <Timeline.Item >
                                    <Tag color="blue">2003 - 2008</Tag>
                                    <span className='itemTitle'> Primary school  </span>
                              </Timeline.Item>
                              <Timeline.Item color="orange">
                                    <Tag color="orange">2008 - 2012</Tag>
                                    <span className='itemTitle'> Junior High school </span>
                                    <p className="itemContent" >
                                          1st Prize, Trieu Phong District Competition in Maths for 8th grade students.
                                    </p>
                                    <p className="itemContent" >
                                          2st Prize, Quang Tri Province Competition in Maths for 11th grade students.
                                    </p>
                              </Timeline.Item>
                              <Timeline.Item >
                                    <Tag color="blue">2012 - 2015</Tag>
                                    <span className='itemTitle'> High school  </span>
                                    <p className="itemContent" >
                                          2st Prize, Quang Tri Province Competition in Maths for 11th grade students.
                                    </p>
                                    <p className="itemContent" >
                                          2st Prize, Quang Tri Province Competition in Maths for 12th grade students.
                                    </p>
                              </Timeline.Item>
                              <Timeline.Item color="orange">
                                    <Tag color="orange"> Since 2015 </Tag>
                                    <span className='itemTitle'> University </span>
                                    <p className="itemContent" >
                                          GPA in 2015-2016: 7.19
                                    </p>
                                    <p className="itemContent" >
                                          GPA in 2016-2017: 7.79
                                    </p>
                                    <p className="itemContent" >
                                          GPA in 2017-2018: 5.68
                                    </p>
                                    <p className="itemContent" >
                                          Schoolarships: Donghanh's Schoolarship 31th previod; VietSeeds’s Schoolarship of VietSeeds Foundation.
                                    </p>
                              </Timeline.Item>

                        </Timeline>
                  </div>
            );
      }
}

export default Awards;