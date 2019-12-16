import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
// Import core components
import ManageWork from './../../components/MangeWork/ManageWork';
import PurchaseMobile from '../../components/PurchaseMobile/PurchaseMobile';
import UserBar from './../../components/Authentication/UserBar';
// Import antd components
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';

import {connect } from 'react-redux';

class Applications extends Component {
    render() {
        let match = this.props.match;
        return (
            <React.Fragment>
                <Row>
                    <Col span={8}>
                        <Button>
                            <Icon type="left" />
                            <Link to="/experience"> Return to list</Link>
                        </Button>
                    </Col>
                    <Col span={8} offset={8}>
                        <UserBar match={match}/>
                    </Col>
                </Row>
                <br />
                {this.authenticate(match.params.app)}
            </React.Fragment>
        );
    }

    authenticate = (app) => {
        if (this.props.isAuthenticated) {
            return this.showApp(app)
        }
        else {
            return <Redirect to={`/experience/apps/${app}/login`} />
        }
    }

    showApp = (app) => {
        switch (app) {
            case "manage-work":
                return <ManageWork />;
            case "purchase-mobile":
                return <PurchaseMobile />
            default:
                return null;
        }
    }
}

const mapStateToProps = state =>{
    return {
        isAuthenticated : state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,null)(Applications);