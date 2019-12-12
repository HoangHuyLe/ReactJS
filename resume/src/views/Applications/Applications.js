import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import core components
import ManageWork from './../../components/MangeWork/ManageWork';
import PurchaseMobile from '../../components/PurchaseMobile/PurchaseMobile';
import LoginBar from '../../components/Login/LoginBar';
import LoginForm from './../../components/Login/LoginForm';
// Import antd components
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';

class Applications extends Component {

    render() {
        let match = this.props.match.match;

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
                        <LoginBar />
                    </Col>
                </Row>                
                <br />
                <LoginForm />
                {/* {this.showApp(match.params.app)} */}
            </React.Fragment>
        );
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

export default Applications;