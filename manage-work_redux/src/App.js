import React from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import * as actions from './actions/index'
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //tasks: [], // id: unique, name, status
      taskEditing: null,
      filter: {
        name: "",
        status: -1
      },
      nameSearch : "",
      isShowList : false,
      sort : {
        by : 'name', // Mắc định sắp xếp theo tên
        value : 1 // 1: tăng dần, -1: giảm dần
      }
    }
  }

  onGenerateTask = () => {
    this.props.onGenTask()
  }

  
  onDisplayForm = () => { // Them task
    // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null
    //   })
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     taskEditing: null
    //   })
    // }
    

  }

  onToggleForm = () =>{
    this.props.onToggleForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,        
      },
      isShowList : false
    })
    
  }

  onSearch = (nameSearch) => {    
    this.setState({
      nameSearch : nameSearch.toLowerCase(),
      isShowList : false
    })
  }

  onShowList = () => {
    this.setState({
      filter: {
        name: "",
        status: -1        
      },
      isShowList : true
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sort : {
        by : sortBy,
        value : sortValue
      }
    })
  }

  render() {

    //let { tasks, sort } = this.state;

    // Search
    // if ( this.state.nameSearch !== ""){      
    //   tasks = this.state.tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(this.state.nameSearch) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
    //   })
    // }

    // // Show list after search
    // if ( this.state.isShowList ){
    //   tasks = this.state.tasks
    // }

    // Filter
    // if (this.state.filter) {
    //   if (this.state.filter.name) {
    //     tasks = this.state.tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(this.state.filter.name) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
    //     })
    //   };
    //   tasks = tasks.filter((task) => {
    //     if (this.state.filter.status === - 1) {
    //       return true // trả về mọi task được truyền vào
    //     }
    //     else {
    //       return (task.status ? 1 : 0) === this.state.filter.status;
    //     }
    //   })

    // }

    // Sort
    // if (sort.by === 'name'){
    //   tasks.sort((a,b)=>{
    //     if (a.name > b.name) {
    //       return sort.value
    //     }
    //     else if (a.name < b.name) return -sort.value;
    //     else return 0;
    //   })
    // } else {
    //   if (sort.by === 'status'){
    //     tasks.sort((a,b)=>{
    //       if (a.status > b.status) {
    //         return -sort.value
    //       }
    //       else if (a.status < b.status) return sort.value;
    //       else return 0;
    //     })
    //   }
    // }

    var {isDisplayForm} = this.props;

    return (

      <div className="container">
        <div className="text-center" >
          <h1>Quản lý công việc</h1>
          <hr />
        </div>

        <div className="row">

          {/* left form */}
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            <TaskForm task={this.state.taskEditing} />         
          </div>

          {/* right form */}
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>Thêm công việc</button>
            <button type="button" className="btn btn-warning ml-5" onClick={this.onGenerateTask}>Sinh công việc</button>
            <Control 
              onSearch = {this.onSearch} 
              onShowList = {this.onShowList}
              onSort = {this.onSort}
            />
            <TaskList             
              isShowList = {this.state.isShowList} 
              onFilter={this.onFilter}
            />
          </div>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm,
  }
  
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGenTask : () => {
      dispatch(actions.genTask())
    },
    onToggleForm : ()=> {
      dispatch(actions.toggleForm())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
