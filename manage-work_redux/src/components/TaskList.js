import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1 // all: -1, active: 1, deactive: 0
        };
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var filter = {
            name : name === "filterName" ? value : this.state.filterName,
            status : name === "filterStatus" ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);

        this.setState({
            [name]: value
        });
    }

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

    render() {

        var {tasks,filterTable} = this.props;

        var elemTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}                
            />
        })

        return (
            <div>
                <div className="row mt-20">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center"> STT</th>
                                    <th className="text-center"> Tên</th>
                                    <th className="text-center"> Trạng thái</th>
                                    <th className="text-center"> Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name="filterName"
                                            value={(this.props.isShowList) ? "" : this.state.filterName}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="form-control"
                                            name="filterStatus"
                                            value={(this.props.isShowList) ? -1 : this.state.filterStatus}
                                            onChange={this.onChange}
                                        >
                                            <option value="-1">Tất cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elemTasks}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable : state.filterTable
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter)=> {
            dispatch(actions.filterTask(filter))
        }
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);