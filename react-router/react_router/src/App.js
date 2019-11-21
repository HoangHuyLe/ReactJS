import "./style.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu";
import routes from './router';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Menu */}
                <Menu />

                {/* Content */}
                <Switch>
                    {showContentMenu(routes)}
                </Switch>

            </div>
        </Router>
    );
}

var showContentMenu = (routes) =>{
    let result = null
    if(routes.length > 0){
        result = routes.map((route, index)=>{
            return (
                <Route
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                    component = {route.component}
                />               
            )
        })
    }
    return result;
}




export default App;
