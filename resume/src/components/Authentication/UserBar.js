import React, { Component } from 'react';
import { Button } from 'antd';
import { Avatar } from 'antd';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import {  Link } from 'react-router-dom'

class UserBar extends Component {

      signOut = () => {
            this.props.onSignOut();
      }

      render() {
            const url = this.props.match.url;
            return (
                  <div>
                        <Button className="float-right ml-10" onClick={this.signOut}>
                              <Link to={`${url}/login`} > Sign Out</Link>
                        </Button>
                        <span className="float-right"> <Avatar icon="user" /> {this.props.username} </span>
                  </div>
            );
      }
}

const mapStateToProps = state => {
      return {
            username: state.auth.username
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
            onSignOut: () => {
                  dispatch(signOut())
            },
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);