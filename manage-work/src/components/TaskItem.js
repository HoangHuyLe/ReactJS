import React from 'react';

class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);        
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);            
    }

    render() {
        var {task, index} = this.props;

        return (
            <tr>
                <td> {index + 1} </td>
                <td> {task.name} </td>
                <td className="text-center">
                    <span 
                        onClick = {this.onUpdateStatus}
                        className = {task.status === true ? 'label label-primary' : 'label label-danger' }>
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

export default TaskItem;