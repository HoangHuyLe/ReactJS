import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Button, Icon } from 'antd';

class AuthContainer extends Component {
      render() {
            return (
                  <div>
                        <Button>
                              <Icon type="left" /> Back
                        </Button>
                        <div className="text-center color-title" >
                              <h1>Login To Use App</h1>
                              <hr/>
                        </div>
                        <LoginForm />
                        <h4>You can test app with accounts below:</h4>
                        <ul>
                              <li>
                                    Username: user1 - password: 12345
                              </li>
                              <li>
                                    Username: user2 - password: 12345
                              </li>
                        </ul>
                  </div>
            );
      }
}

export default AuthContainer;