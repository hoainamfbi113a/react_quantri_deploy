import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as memberAction  from "../../../../actions/memberAction";
import './style.css'
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
class AdminAddItemMember extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          memberLogin: '',
          memberPass:'',
          memberName : '',
          memberDate : '',
          memberSex : 'NAM',
          memberAddress : '',
          // memberClassId : 'Toán lớp 1',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange = (e) => {
        switch (e.target.name) {
          case 'avatarContentImg':
            this.setState({ avatarContentImg: e.target.files[0] });
            break;
          case 'avatarContentImg2':
            this.setState({ avatarContentImg2: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        const { memberLogin, memberPass, avatarContentImg, avatarContentImg2, memberName,memberDate,memberSex,memberAddress } = this.state;
        const formData = new FormData()
        formData.append('avatarContentImg', avatarContentImg);
        formData.append('avatarContentImg2', avatarContentImg2);
        formData.append('memberLogin', memberLogin);
        formData.append('memberPass', memberPass);
        formData.append('memberName', memberName);
        formData.append('memberDate', memberDate);
        formData.append('memberSex', memberSex);
        formData.append('memberAddress', memberAddress);
        const {memberActionsCreators} = this.props;
        const { addMember } = memberActionsCreators;
        this.timeout = setTimeout(() => {
          const { fetchListMember } = memberActionsCreators;
          fetchListMember();
         }, 500);
        let { member } = this.props;
        let obj = member.find(o => o.memberLogin === memberLogin);
        if(!obj){
        // member.memberLogin.index
          setTimeout(()=>{
            addMember(formData);
          r.props.history.push('/admin/member');
          },400)
        }
        else{
          alert("Ten dang nhap da duoc su dung");
        }
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
                  <option value="NỮ">NỮ</option>
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
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Avatar</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <input
                  type="file"
                  name="avatarContentImg"
                  onChange={this.onChange}
                />
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

const mapStateToProps = state =>{
  return {
    member: state.memberReducer.listmember,
  };
}
const mapDispatchToProps = dispatch =>{
  return {
    memberActionsCreators:bindActionCreators(memberAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemMember)
