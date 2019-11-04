import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class TaskForm extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  id : '',
                  name: '',
                  status: true
            }
            this.baseState = this.state
      }

      UNSAFE_componentWillMount = () => {            
            if (this.props.itemEditting) {
                  this.setState({
                        id : this.props.itemEditting.id,
                        name : this.props.itemEditting.name,
                        status : this.props.itemEditting.status,
                  })
            }
            else {
                  this.setState(this.baseState)
            }
      }

      UNSAFE_componentWillReceiveProps(nextProps) {            
            if (nextProps){
                  if(!nextProps.itemEditting){
                        this.setState(this.baseState)
                        console.log(nextProps)
                  } else{
                        this.setState({
                              id : nextProps.itemEditting.id,
                              name : nextProps.itemEditting.name,
                              status : nextProps.itemEditting.status,
                        })
                  }
            }  
      }

      reset = () => {
            this.setState(this.baseState)
      }

      onCloseForm = () => {
            this.props.onCloseForm();
      }

      onChange = (event) => {
            let name = event.target.name;
            let value = event.target.value;
            if (name === "status") {

                  if (value === 'true') {
                        value = true
                  } else {
                        value = false
                  }
            }
            this.setState({
                  [name]: value,
            });
      }

      onSubmit = (data) => {
            data.preventDefault();
            this.props.onAddTask(this.state);
            this.reset();
      }

      render() {
            var {id} = this.state;            
            if (!this.props.isDisplayForm) return "";
            return (

                  <div className="panel panel-danger">
                        <div className="panel-heading">

                              <h3 className="panel-title">
                                    {(id === '') ? "Thêm công việc" : "Cập nhật công việc" }
                                    <span onClick={this.onCloseForm}><i className="far fa-window-close" style={{ float: 'right' }}></i></span>
                              </h3>

                        </div>
                        <div className="panel-body">
                              <form id="formTask" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                          <label>Tên: </label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                name='name'
                                                onChange={this.onChange}
                                                value={this.state.name}
                                          />
                                    </div>
                                    <div className="form-group">
                                          <label >Trạng thái: </label>
                                          <select
                                                name="status"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={this.state.status}
                                          >
                                                <option value={true}> Kích hoạt </option>
                                                <option value={false}> Ẩn</option>
                                          </select>
                                    </div>
                                    <div className="text-center">
                                          <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp; &nbsp;
                                          <button type="button" className="btn btn-primary" onClick={this.reset}>Hủy bỏ</button>
                                    </div>
                              </form>
                        </div>
                  </div>

            )
      }
}

const mapStateToProps = (state) =>{
      return {
            isDisplayForm : state.isDisplayForm,
            itemEditting : state.itemEditting
      }
}

const mapDispatchToProps = (dispatch, props) => {
      return {
            onAddTask : (task) => {
                  dispatch(actions.addTask(task))                  
            },
            onCloseForm : ()=>{
                  dispatch(actions.closeForm());
            }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
