import React, { Component } from 'react';
// Import css
import './../../assets/css/commons.css';
// Import antd component
import { Progress, Divider } from 'antd';

class SkillsChart extends Component {

      render() {
            return (
                  <div className="container mt-10">
                        <div className="title-component">
                              <span>Programing Skills</span>
                        </div>
                        <Divider />
                        <div>
                              <span>Reactjs</span> 
                              <Progress percent={50} showInfo/>
                              <span>HTML,CSS,JS</span>
                              <Progress percent={50} />
                              <span>Reduct</span>
                              <Progress percent={50} />
                              <span>Webpack</span>
                              <Progress percent={50} />
                              <span>C++</span>
                              <Progress percent={60} />
                              <span>Git</span>
                              <Progress percent={60} />
                        </div>
                  </div>
            );
      }
}

export default SkillsChart;