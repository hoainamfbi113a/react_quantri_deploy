import React, { Component } from 'react'
import axios from 'axios';
export default class AdminAddItemMember extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          memberLogin: '',
          memberPass:'',
          memberName : '',
          memberDate : '',
          memberSex : '',
          memberAddress : '',
          memberClassId : 'Toán lớp 1',
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
        axios.post('http://localhost:5000/admin/member', {
            _id:this.state._id,
            memberLogin: this.state.memberLogin,
            memberPass: this.state.memberPass,
            memberName: this.state.memberName,
            memberDate: this.state.memberDate,
            memberSex: this.state.memberSex,
            memberAddress: this.state.memberAddress,
            memberClassId: this.state.memberClassId,
          })
          .then(function (response) {
            //  alert(response.data)
            if(response.data ==='User already exists')
              // alert('User already exists');
              alert(response.data);
            else{
            r.props.history.push('/admin/member')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
         
      //  r.props.history.push('/admin/member')
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm học sinh</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tên đăng nhập</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                <input type="email" className="form-control"  placeholder="Tên đăng nhập" onChange={this.onChange} name="memberLogin" value={this.state.memberLogin}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Mật khẩu</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Mật khẩu"onChange={this.onChange} name="memberPass" value={this.state.memberPass}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Họ và tên</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="Họ và tên" onChange={this.onChange} name="memberName" value={this.state.memberName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Ngày sinh</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="date" className="form-control" id="inputPassword3" placeholder="Ngày sinh"onChange={this.onChange} name="memberDate" value={this.state.memberDate}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Giới tính</label>
              {/* <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Giới tính" onChange={this.onChange} name="memberSex" value={this.state.memberSex}/>
              </div> */}
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange} name="memberSex">
                  <option value="NAM">NAM</option>
                  <option value="Nữ">Nữ</option>
              </select>
                </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Địa chỉ</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Địa chỉ"onChange={this.onChange} name="memberAddress" value={this.state.memberAddress}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Lớp</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="memberClassId">
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Anh văn 1">Anh văn 1</option>
              </select>
                {/* <input type="text" className="form-control"  placeholder="Lớp học" onChange={this.onChange} name="memberClassId" value={this.state.memberClassId}/> */}
              </div>
            </div>
            
          </div>
          {/* /.box-body */}
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Thêm</button>
          </div>
          {/* /.box-footer */}
        </form>
      </div>
      </section>
     
            </div>

        )
    }
}
