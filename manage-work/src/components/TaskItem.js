import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <tr>
                <td> 1 </td>
                <td> Hoc ReactJs </td>
                <td className="text-center">
                    <span className="label label-info">Kích hoạt</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-info">Sửa</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;