import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import css
import 'antd/dist/antd.css';
// Import css
import './../../assets/css/style.css';
// Import core component 
import SideNavigation from './../../components/SideNavigation/SideNavigation';
import routes from './../../routes';
// Import antd component
import { Layout } from 'antd';

const { Content } = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideNavigation />
                    <Layout style={{ marginLeft: '200px' }}>
                        <Content style={{ margin: '10px 30px' }}>
                            <Switch>
                                {routes.map((route, index) => (
                                    // Show sidebar menu content
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                ))}
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
