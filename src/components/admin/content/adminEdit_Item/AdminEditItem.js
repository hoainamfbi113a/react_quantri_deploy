import React, { Component } from 'react'
import axios from 'axios';
export default class AdminEditItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail  = this.onChangeCompany.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        _id:'',
        fullname: '',
        email: ''
    }
    }
    componentDidMount() {
    //  axios.get('http://localhost:4000/persons/edit/'+this.props.match.params.id)
      //alert(this.props.match.params.id)
      axios.get('http://localhost:5000/employee/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  _id:this.props.match.params.id,
                  fullname: response.data.fullname,
                  email: response.data.email,
                   });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
      onChangeName(e) {
        this.setState({
            fullname: e.target.value
        });
    }
    onChangeCompany(e) {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit(e) {
      e.preventDefault();
      const obj = {
          _id:this.state._id,
          fullname: this.state.fullname,
          email: this.state.email
      };
      axios.post('http://localhost:5000/employee', obj)
          .then(res => console.log(res.data));

      this.props.history.push('/index');
  }
    render() {
        return (
            <div>
                  <div className="content-wrapper">
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Edit</h3>
        </div>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input  type="text"
                            className="form-control"
                            value={this.state.fullname}
                            onChange={this.onChangeName} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input  type="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeCompany} />
              </div>
            </div>
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-info pull-right">Sign in</button>
          </div>
        </form>
      </div>
      </section>
      </div>
            </div>
        )
    }
}
