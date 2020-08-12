import React, { Component } from 'react'
import axios from 'axios';
import { toastSuccess } from '../../../../helpers/toastHelper';
export default class AdminEditItem extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
      _id:'',
      memberLogin: '',
      memberPass:'',
      memberName : '',
      memberDate : '',
      memberSex : 'NAM',
      memberAddress : '',
      memberClassId : '',
      
    }
  }
    componentDidMount() {
      axios.get('https://cititechnodejs.herokuapp.com/admin/member/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  _id:this.props.match.params.id,
                  memberLogin: response.data.memberLogin,
                  memberPass:response.data.memberPass,
                  memberName : response.data.memberName,
                  memberDate : response.data.memberDate,
                  memberSex : response.data.memberSex,
                  memberAddress : response.data.memberAddress,
                  memberClassId : response.data.memberClassId,
                   });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
    onChange = (e) => {
      switch (e.target.name) {
        case 'avatarContentImg':
          this.setState({ avatarContentImg: e.target.files[0] });
          break;
        default:
          this.setState({ [e.target.name]: e.target.value });
      }
    }
    onSubmit(e) {
      e.preventDefault();
      const {_id, memberLogin, memberPass, avatarContentImg,memberName,memberDate,memberSex,memberAddress } = this.state;
        const formData = new FormData()
        formData.append('_id', _id);
        formData.append('avatarContentImg', avatarContentImg);
        formData.append('memberLogin', memberLogin);
        formData.append('memberPass', memberPass);
        formData.append('memberName', memberName);
        formData.append('memberDate', memberDate);
        formData.append('memberSex', memberSex);
        formData.append('memberAddress', memberAddress);
        axios.post('https://cititechnodejs.herokuapp.com/admin/member', formData)
        .then(res => console.log(res.data));
        toastSuccess('Cập nhật học sinh thành công');
        
        setTimeout(()=>{
          this.props.history.push('/admin/member');
        },600)
  }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa học sinh</h3>
        </div>
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tên đăng nhập</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >

                <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                <input type="text" className="form-control"  placeholder="Tên đăng nhập" onChange={this.onChange} name="memberLogin" value={this.state.memberLogin}/>
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
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange} name="memberSex" value={this.state.memberSex}>
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
              {/*
               <select className="form-control" onChange={this.onChange} name="memberClassId" value={this.state.memberClassId}>
                  <option value="Anh văn 1">Anh văn 1</option>
                  <option value="Anh văn 2">Anh văn 2</option>
                  <option value="Anh văn 3">Anh văn 3</option>
                  <option value="Anh văn 4">Anh văn 4</option>
                  <option value="Anh văn 5">Anh văn 5</option>
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Toán lớp 3">Toán lớp 3</option>
                  <option value="Toán lớp 4">Toán lớp 4</option>
                  <option value="Toán lớp 5">Toán lớp 5</option>
              </select> */}
               </div>
            </div>
          </div>
          
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Sửa</button>
          </div>
          {/* /.box-footer */}
        </form>
      </div>
      </section>
            </div>
        )
    }
}
