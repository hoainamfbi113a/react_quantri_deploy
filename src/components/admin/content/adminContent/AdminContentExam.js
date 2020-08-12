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
        refresh:true,
        currentPage: 1,
        newsPerPage: 7,
        filterlist:"",
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
    componentDidMount(){
      const { examActionCreators } = this.props;
      const { fetchListexam } = examActionCreators;
      fetchListexam();
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
    filterList = (event) => {
      this.setState({
        filterlist: event.target.value
      })
    }
    onChangefile = (e) =>{
      // alert("change file")
      switch (e.target.name) {
        case 'file':
          this.setState({ file: e.target.files[0] });
          break;
        default:
          this.setState({ [e.target.name]: e.target.value });
      }
    }
    onSubmit =(e) => {
      e.preventDefault();
      const {file } = this.state;
        const formData = new FormData()
        formData.append('file', file);
        axios.post('https://cititechnodejs.herokuapp.com/admin/exam/excel', formData)
        .then(res => console.log(res.data));
        alert("Cập nhật thành công")
        // this.props.history.push('/');
  }
    render() {
      let { exam } = this.props;
      let filterList = this.state.filterlist;
      exam = exam.filter(function(item) {
          return item.examName && item.examName.toLowerCase().search(filterList.toLowerCase()) !== -1;
        });
      const currentPage = this.state.currentPage;
      const newsPerPage = this.state.newsPerPage;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = exam.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return <Item stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(exam.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
        return (     
       <div>
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                  <div className="box-header">
                  <div >
                  <Link to="exam/add"><button  type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm đề thi</button></Link>
                  <Link to="exam/addexcel"><button style={{marginLeft: '15px'}} type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm đề thi(Excel)</button></Link>
                      <div className="news-per-page" style={{marginTop: '10px'}}>
                          <select defaultValue="0" onChange={this.select} >
                            <option value="0" disabled>Get by</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="202">20</option>
                          </select>
                        </div>
                      </div>
                  <input style={{height: '36px'}} type="text" placeholder="Search" onChange={this.filterList}/>
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
                        {/* <th>Sửa đề thi</th> */}
                        <th>Xóa đề thi</th>
                      </tr>
                    </thead>
                    <tbody>
                    {renderTodos}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên đề thi </th>
                        <th>Loại câu hỏi</th>
                        <th>Thời gian làm bài</th>
                        <th>Lớp làm bài</th>
                        {/* <th>Sửa đề thi</th> */}
                        <th>Xóa đề thi</th> 
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