import React from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  render() {
    return (

      <div className="container">
        <div className="text-center" >
          <h1>Quản lý công việc</h1>
          <hr />
        </div>

        <div className="row">

          {/* left form */}
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />

          </div>

          {/* right form */}
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Control/>
            <TaskList/>
          </div>

        </div>
      </div>

    )
  }
}

export default App;
