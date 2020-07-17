import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as memberActions from '../../../../actions/memberAction';

import Item from '../Items/ItemMember';
// import Items 
class AdminContentMember extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[],
      }
    }
    handleShowAlert = (item) =>{
      this.setState({
        showAlert:true,
        titleAlert: item.name,
        idAlert: item._id
      })
    }
    handleDeleteItem = () => {
      let { idAlert, news } = this.state;
      const { memberActionCreators } = this.props;
      const { deleteMember } = memberActionCreators;
      deleteMember(idAlert);
      this.setState({
        showAlert:false
      });
  }

    componentDidMount(){ 
      const { memberActionCreators } = this.props;
      const { fetchListMember } = memberActionCreators;
      fetchListMember();
     
    }
    renderItem = () =>{
      let { member } = this.props;
      // console.log(member);
        return (
          member.map((item,index)=>{
            return(
              <Item key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert}/>
            )
          })
        )
    }
    render() {
        return (     
       <div>
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                <Link to="member/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm học sinh</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tên đăng nhập</th>
                        <th style={{width: '50px'}}>Mật khẩu</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Avatar</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên đăng nhập</th>
                        <th style={{width: '50px'}}>Mật khẩu</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        
                        <th>Avatar</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                       
                      </tr>
                    </tfoot>
                  </table>
                </div>
               
              </div>
             
            </div>
           
          </div>
          <Swal
                            show={this.state.showAlert}
                            title="Delete Item"
                            // text={this.state.}
                            showCancelButton
                            onOutsideClick={()  => this.setState({ showAlert: false })}
                            onEscapeKey={()     => this.setState({ showAlert: false })}
                            onCancel={()        => this.setState({ showAlert: false })}
                            onConfirm={() => this.handleDeleteItem()}
           />
        </section>
       
        </div>    

        )
    }
}

const mapStateToProps = state => {
  return {
    member: state.memberReducer.listmember,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    memberActionCreators: bindActionCreators(memberActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentMember);
