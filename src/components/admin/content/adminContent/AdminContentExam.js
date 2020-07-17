import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemExam';
import * as examActions from '../../../../actions/examAction';

// import Items 
class AdminContentExam extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[],
        refresh:true
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
      let { idAlert, exam } = this.state;
      const { examActionCreators } = this.props;
      const { deleteexam } = examActionCreators;
      deleteexam(idAlert);
      this.setState({
        showAlert:false
      });
  }
  handleEditItem = (index,item) => {

    this.setState({
        indexEdit: index,
        idEdit: item._id,
        nameEdit: item.fullname,
        emailEdit: item.email,
       
    });
}
    componentDidMount(){
      const { examActionCreators } = this.props;
      const { fetchListexam } = examActionCreators;
      fetchListexam();
    }
    renderItem = () =>{
      
      let { exam } = this.props;
    return (
      exam.map((item, index) => {
        return (
          <Item key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert}></Item>
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
                <Link to="exam/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm đề thi</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tên đề thi </th>
                        <th>Loại câu hỏi</th>
                        <th>Thời gian làm bài</th>
                        <th>Lớp làm bài</th>
                        <th>Sửa đề thi</th>
                        <th>Xóa đề thi</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên đề thi </th>
                        <th>Loại câu hỏi</th>
                        <th>Thời gian làm bài</th>
                        <th>Lớp làm bài</th>
                        <th>Sửa đề thi</th>
                        <th>Xóa đề thi</th> 
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
                            text="abc"
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
    exam: state.examReducer.listexam,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    examActionCreators: bindActionCreators(examActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentExam);