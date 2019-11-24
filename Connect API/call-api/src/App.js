import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          {this.showContentMenu(routes)};
          <div className="container">
            
          </div>
        </div>
      </Router>
    )
  }

  showContentMenu(routes) {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )
      })
    }
    return <Switch>
      {result}
    </Switch>;
  }
}

export default App;
