import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
// Import core components
import ManageWork from './../../components/MangeWork/ManageWork';
import PurchaseMobile from '../../components/PurchaseMobile/PurchaseMobile';
// Import antd components
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';

class Applications extends Component {
    isLogin = false;
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
                        Account
                    </Col>
                </Row>
                <br />
                {this.authenticate(match.params.app)}
            </React.Fragment>
        );
    }

    authenticate = (app) => {
        if (this.isLogin) {
            return this.showApp(app)
        }
        else {
            return <Redirect to="/experience/apps/login" />
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

export default Applications;