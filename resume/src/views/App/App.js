import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './../../routes';
import configureStore from '../../redux/configureStore';
// Import css
import 'antd/dist/antd.css';
// Import css
import './../../assets/css/style.css';
// Import core component 
import SideNavigation from './../../components/SideNavigation/SideNavigation';
import GlobalLoading from '../../components/GlobalLoading/GlobalLoading';
// Import antd component
import { Layout } from 'antd';



const store = configureStore();
const { Content } = Layout;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <GlobalLoading/>
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
            </Provider>
        );
    }
}

export default App;
