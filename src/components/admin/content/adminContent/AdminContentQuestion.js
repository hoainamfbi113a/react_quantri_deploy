import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemQuestion';
import * as questionActions from '../../../../actions/questionAction';
import './style.css';
import { withRouter  } from 'react-router'
// import Items 
class AdminContentQuestion extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[],
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
      let {idAlert, persons} = this.state;
      const { questionActionCreators } = this.props;
      const { deletequestion } = questionActionCreators;
      deletequestion(idAlert);
      this.setState({
        showAlert:false
      });
  }
 
    componentDidMount(){ 
            const { questionActionCreators } = this.props;
            const { fetchListquestion } = questionActionCreators;
            fetchListquestion();
        
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
    render() {
      let { question } = this.props;
      let filterList = this.state.filterlist;
      question = question.filter(function(item) {
          return item.questionName && item.questionName.toLowerCase().search(filterList.toLowerCase()) !== -1;
        });
      const currentPage = this.state.currentPage;
      const newsPerPage = this.state.newsPerPage;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = question.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return <Item stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(question.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
      return (     
       
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <div >
                      <Link to="question/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm câu hỏi</button></Link>
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
                        <th>Loại câu hỏi</th>
                        <th>Tên câu hỏi</th>
                        <th>Đáp án A</th>
                        <th>Đáp án B</th>
                        <th>Đáp án C</th>
                        <th>Đáp án D</th>
                        <th>Đáp án đúng</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {renderTodos}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Loại câu hỏi</th>
                        <th>Tên câu hỏi</th>
                        <th>Đáp án A</th>
                        <th>Đáp án B</th>
                        <th>Đáp án C</th>
                        <th>Đáp án D</th>
                        <th>Đáp án đúng</th>
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
                            text="abc"
                            showCancelButton
                            onOutsideClick={()  => this.setState({ showAlert: false })}
                            onEscapeKey={()     => this.setState({ showAlert: false })}
                            onCancel={()        => this.setState({ showAlert: false })}
                            onConfirm={() => this.handleDeleteItem()}
           />
        </section>
       
                  
          

        )
    }
}
const mapStateToProps = state => {
  return {
    question: state.questionReducer.listquestion,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    questionActionCreators: bindActionCreators(questionActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentQuestion);
