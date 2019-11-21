import React from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import * as actions from './actions/index'
import { connect } from 'react-redux';

class App extends React.Component {

  onGenerateTask = () => {
    this.props.onGenTask()
  }

  onToggleForm = () => {
    this.props.onClearTask(
      {
        id: '',
        name: '',
        status: false
      }
    );
    if (this.props.itemEditting.id !== '') {
      this.props.onOpenForm();
    }
    else {
      this.props.onToggleForm();
    }
  }

  render() {

    var { isDisplayForm } = this.props;

    return (

      <div className="container">
        <div className="text-center" >
          <h1>Quản lý công việc</h1>
          <hr />
        </div>

        <div className="row">

          {/* left form */}
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            <TaskForm />
          </div>

          {/* right form */}
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>Thêm công việc</button>
            <button type="button" className="btn btn-warning ml-5" onClick={this.onGenerateTask}>Sinh công việc</button>
            <Control />
            <TaskList />
          </div>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting
  }

}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGenTask: () => {
      dispatch(actions.genTask())
    },
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
