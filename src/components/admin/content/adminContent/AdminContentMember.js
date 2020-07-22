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
        currentPage: 1,
        newsPerPage: 7,
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
    chosePage = (event) => {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
    select = (event) => {
      this.setState({
        newsPerPage: event.target.value
      })
    }
    render() {
      let { member } = this.props;
      const currentPage = this.state.currentPage;
      const newsPerPage = this.state.newsPerPage;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = member.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return <Item stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} />;
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(member.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
        return (     
       <div>
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                <Link to="member/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm học sinh</button></Link>
                <div className="news-per-page" style={{marginTop: '10px'}}>
                    <select defaultValue="0" onChange={this.select} >
                      <option value="0" disabled>Get by</option>
                      <option value="3">5</option>
                      <option value="5">10</option>
                      <option value="7">20</option>
                    </select>
                  </div>
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
                     {/* {this.renderItem()} */}
                     {renderTodos}
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
                <div className="pagination-custom">
                  <ul id="page-numbers">
                    {
                      pageNumbers.map(number => {
                        if (this.state.currentPage === number) {
                          return (
                            <li key={number} id={number} className="active">
                              {number}
                            </li>
                          )
                        }
                        else {
                          return (
                            <li key={number} id={number} onClick={this.chosePage} >
                              {number}
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
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
