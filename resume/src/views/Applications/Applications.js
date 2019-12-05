import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Import core components
import ManageWork from './../../components/MangeWork/ManageWork';
import PurchaseMobile from '../../components/PurchaseMobile/PurchaseMobile';
// Import antd components
import { Button, Icon } from 'antd';

class Applications extends Component {

    render() {
        let match = this.props.match.match;
        
        return (
            <React.Fragment>
                <Button>
                    <Icon type="left" />
                    <Link to="/experience"> Return to list</Link>
                </Button>
                <br/>
                {this.showApp(match.params.app)}
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