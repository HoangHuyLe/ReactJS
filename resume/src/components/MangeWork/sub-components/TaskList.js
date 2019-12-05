import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../../../actions/ManageWork/index';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1, // all: -1, active: 1, deactive: 0
        };
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var filter = {
            name: name === "filterName" ? value.toLowerCase() : this.state.filterName,
            status: name === "filterStatus" ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);

        this.setState({
            [name]: value
        });
        this.props.onShowList(false);
    }

    render() {

        var { tasks, filterTable, searchTask, isShowList, sort } = this.props;

        // Search
        if (searchTask !== "") {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
            })
        }


        // Filter on table
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name) !== -1; // hàm indexOf sẽ trả về -1 nếu không tìm thấy
                })
            };
            tasks = tasks.filter((task) => {
                if (filterTable.status === - 1) {
                    return true // trả về mọi task được truyền vào
                }
                else {
                    return (task.status ? 1 : 0) === filterTable.status;
                }
            })
        }

        // Sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) {
                    return sort.value
                }
                else if (a.name < b.name) return -sort.value;
                else return 0;
            })
        } else {
            if (sort.by === 'status') {
                tasks.sort((a, b) => {
                    if (a.status > b.status) {
                        return -sort.value
                    }
                    else if (a.status < b.status) return sort.value;
                    else return 0;
                })
            }
        }

        // Show list
        if (isShowList) {
            tasks = this.props.tasks;
        }

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
        tasks: state.ManageWork_Reducer.tasks,
        filterTable: state.ManageWork_Reducer.filterTable,
        searchTask: state.ManageWork_Reducer.searchTask,
        isShowList: state.ManageWork_Reducer.showList,
        sort: state.ManageWork_Reducer.sort
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        },
        onShowList: (value) => {
            dispatch(actions.showList(value))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);