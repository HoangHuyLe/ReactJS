import React from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import Demo from "./training/demo";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id: unique, name, status
      isDisplayForm: false,
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
    var data = [
      {
        id: this.generateID(),
        name: 'Hoc Lap Trinh',
        status: true,
      },
      {
        id: this.generateID(),
        name: 'Hoc HTML',
        status: true,
      },
      {
        id: this.generateID(),
        name: 'Hoc CSS',
        status: false,
      }
    ];

    this.setState({
      tasks: data,
    })

  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + this.s4() + this.s4();
  }

  onDisplayForm = () => { // Them task
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      })
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      })
    }

  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onReceiveTask = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      // Them du lieu
      data.id = this.generateID();
      tasks.push(data);
    } else {
      // Chinh sua du lieu
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    this.onCloseForm()
  }

  onUpdateStatus = (id) => {
    let index = this.findIndex(id);
    let { tasks } = this.state;
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      })
    }

  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (id === task.id) {
        result = index
        return result;
      }
    })
    return result;
  }

  onDelete = (id) => {
    let index = this.findIndex(id);
    let { tasks } = this.state;
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      })
    }

  }

  onUpdate = (id) => {
    let index = this.findIndex(id);
    let { tasks } = this.state;
    let taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    })

    this.onShowForm();
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

    let { tasks, sort } = this.state;

    

    // Search
    if ( this.state.nameSearch !== ""){      
      tasks = this.state.tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(this.state.nameSearch) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
      })
    }

    // Show list after search
    if ( this.state.isShowList ){
      tasks = this.state.tasks
    }

    // Filter
    if (this.state.filter) {
      if (this.state.filter.name) {
        tasks = this.state.tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(this.state.filter.name) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
        })
      };
      tasks = tasks.filter((task) => {
        if (this.state.filter.status === - 1) {
          return true // trả về mọi task được truyền vào
        }
        else {
          return (task.status ? 1 : 0) === this.state.filter.status;
        }
      })

    }

    // Sort
    if (sort.by === 'name'){
      tasks.sort((a,b)=>{
        if (a.name > b.name) {
          return sort.value
        }
        else if (a.name < b.name) return -sort.value;
        else return 0;
      })
    } else {
      if (sort.by === 'status'){
        tasks.sort((a,b)=>{
          if (a.status > b.status) {
            return -sort.value
          }
          else if (a.status < b.status) return sort.value;
          else return 0;
        })
      }
    }

    return (

      <div className="container">
        <div className="text-center" >
          <h1>Quản lý công việc</h1>
          <hr />
        </div>

        <div className="row">

          {/* left form */}
          <div className={this.state.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {this.state.isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} onReceiveTask={this.onReceiveTask} task={this.state.taskEditing} /> : ""}
          </div>

          {/* right form */}
          <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onDisplayForm}>Thêm công việc</button>
            <button type="button" className="btn btn-warning ml-5" onClick={this.onGenerateTask}>Sinh Item</button>
            <Control 
              onSearch = {this.onSearch} 
              onShowList = {this.onShowList}
              onSort = {this.onSort}
            />
            <TaskList
              tasks={tasks}              
              isShowList = {this.state.isShowList}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>

        </div>
      </div>

    )
  }
}

export default App;
