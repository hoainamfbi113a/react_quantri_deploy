import React, { Component } from 'react'
import axios from 'axios';
export default class AdminAddItem extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          fullname: '',
          email: '',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        axios.post('http://localhost:5000/employee', {
            _id:this.state._id,
            fullname: this.state.fullname,
            email: this.state.email,
          })
          .then(function (response) {
            if(response.data ==='User already exists')
              alert('User already exists');
            else{
            r.props.history.push('/')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       r.props.history.push('/')
      }
    render() {
        return (
            <div>
             <div className="content-wrapper">
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Add</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="hidden" className="form-control" id="inputEmail3" placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                <input type="text" className="form-control" id="inputEmail3" placeholder="text" onChange={this.onChange} name="fullname" value={this.state.fullname}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPassword3" placeholder="text"onChange={this.onChange} name="email" value={this.state.email}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                </div>
              </div>
            </div>
          </div>
          {/* /.box-body */}
          <div className="box-footer">
            
            <button type="submit" className="btn btn-info pull-right">Thêm</button>
          </div>
          {/* /.box-footer */}
        </form>
      </div>
      </section>
      </div>
            </div>

        )
    }
}
