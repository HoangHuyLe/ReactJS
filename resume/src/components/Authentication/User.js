import React, { Component } from 'react';
import { Button } from 'antd';

class User extends Component {
      render() {
            return (
                  <div>
                        <Button className="float-right  ml-5">Đăng nhập</Button>
                        <Button className="float-right">Đăng ký</Button>
                  </div>
            );
      }
}

export default User;