import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class AuthContainer extends Component {

      onAuthenticateSuccess = () => {
            let { app } = this.props.match.params;
            if (this.props.isAuthenticated) {
                  return <Redirect to={`/experience/apps/${app}`} />
            }
            return null;
      }

      onGoBack = () => {
            this.props.history.goBack()
      }

      render() {            
            return (
                  <React.Fragment>
                        <Button onClick={this.onGoBack}>
                              <Icon type="left" /> Back
                        </Button>
                        <div className="text-center color-title" >
                              <h1>Login To Use App</h1>
                              <hr />
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
                        {this.onAuthenticateSuccess()}
                  </React.Fragment>
            );
      }
}

const mapStateToProps = state => {
      return {
            isAuthenticated: state.auth.isAuthenticated
      }
}

export default connect(mapStateToProps, null)(AuthContainer);