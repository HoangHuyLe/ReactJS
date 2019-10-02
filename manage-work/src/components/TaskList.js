import React from 'react';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
    render() {
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
                                        <input type='text' className='form-control' />
                                    </td>
                                    <td>
                                        <select name="" className="form-control" >
                                            <option value="-1">Tất cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                <TaskItem/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;