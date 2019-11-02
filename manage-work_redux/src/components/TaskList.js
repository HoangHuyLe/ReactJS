import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

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

        this.setState({
            [name]: value
        });

        this.props.onFilter(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus

        )
    }


    render() {

        var tasks = this.props.tasks;
        
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
        tasks: state.tasks
    }
};

export default connect(mapStatetoProps, null)(TaskList);