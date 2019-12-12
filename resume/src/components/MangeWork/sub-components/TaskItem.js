import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/ManageWork/index';

class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td className='text-center'> {index + 1} </td>
                <td> {task.name} </td>
                <td className="text-center">
                    <span
                        onClick={this.onUpdateStatus}
                        className={task.status === true ? 'label label-primary' : 'label label-danger'}>
                        {task.status ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-info" onClick={this.onUpdate}>Sửa</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}> Xóa </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
