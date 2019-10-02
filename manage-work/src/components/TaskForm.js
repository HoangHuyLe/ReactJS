import React from 'react';

class TaskForm extends React.Component {
      render() {
            return (

                  <div className="panel panel-danger">
                        <div className="panel-heading">

                              <h3 className="panel-title">
                                    Thêm công việc
                                    <i className="far fa-window-close" style={{ float: 'right' }}></i>
                              </h3>

                        </div>
                        <div className="panel-body">
                              <form>
                                    <div className="form-group">
                                          <label>Tên: </label>
                                          <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                          <label >Trạng thái: </label>
                                          <select name="" className="form-control" >
                                                <option value={true}> Kích hoạt </option>
                                                <option value={false}> Ẩn</option>
                                          </select>
                                    </div>
                                    <div className="text-center">
                                          <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp; &nbsp;
                                          <button type="reset" className="btn btn-primary">Hủy bỏ</button>
                                    </div>
                              </form>
                        </div>
                  </div>

            )
      }
}

export default TaskForm;
