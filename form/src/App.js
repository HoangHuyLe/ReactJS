import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: '',
      txtDescription: "",
      sltGender: 0,
      rdLang : "vi",
      chkbStatus : true,
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    var name = event.target.name;
    var values = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: values,
    });

  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }


  render() {
    return (

      <div className="container mt-30">
        <div className="row">

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">FORM</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.onHandleSubmit}>

                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUsername"
                      onChange={this.onHandleChange}
                      value={this.state.txtUsername}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.onHandleChange}
                      value={this.state.txtPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mô tả: </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="txtDescription"
                      onChange={this.onHandleChange}
                      value={this.state.txtDescription}
                    >
                    </textarea>
                  </div>

                  <div className="form-group">
                    <label>Giới tính: </label>
                    <select
                      name="sltGender"
                      className="form-control"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0}> Nữ </option>
                      <option value={1}> Nam </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Ngôn ngữ: </label>
                    <div className="radio" >
                      <label>
                        <input type="radio" value="en" name = "rdLang" onChange={this.onHandleChange} checked={this.state.rdLang === "en"}/>
                      
                        Tiếng Anh
                      </label> &nbsp;
                      <label>
                        <input type="radio"  value="vi" name = "rdLang" onChange={this.onHandleChange} checked = {this.state.rdLang === "vi"}/>
                        Tiếng Việt
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Ngôn ngữ: </label>
                    
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value={true} name="chkbStatus" onChange={this.onHandleChange} checked={this.state.chkbStatus === true}/>
                        Trạng thái
                      </label>
                    </div>
                    
                  </div>

                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;{"   "}
                  <button type="reset" className="btn btn-primary">Xóa trắng</button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>

    );
  }

}

export default App;
