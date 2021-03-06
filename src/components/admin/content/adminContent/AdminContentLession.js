import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemLession';
import * as lessionActions from '../../../../actions/lessionAction';
class AdminContentLession extends Component {
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
      let { idAlert } = this.state;
      const { lessionActionCreators } = this.props;
      const { deletelession } = lessionActionCreators;
      deletelession(idAlert);
      this.setState({
        showAlert:false
      });
  }
 
  async componentDidMount(){
      this.timeout = setTimeout(() => {
      const { lessionActionCreators } = this.props;
      const { fetchListlession } = lessionActionCreators;
      fetchListlession();
      }, 200);
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
      let { lession } = this.props;
      let filterList = this.state.filterlist;
      lession = lession.filter(function(item) {
          return item.lessionContentTitle && item.lessionContentTitle.toLowerCase().search(filterList.toLowerCase()) !== -1;
        });
      const currentPage = this.state.currentPage;
      const newsPerPage = this.state.newsPerPage;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = lession.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return <Item stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(lession.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
        return (     
       
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
    
                <div className="box-header">
                  <div >
                  <Link to="lession/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm bài học</button></Link>
                      <div className="news-per-page" style={{marginTop: '10px'}}>
                          <select defaultValue="0" onChange={this.select} >
                            <option value="0" disabled>Get by</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                          </select>
                        </div>
                      </div>
                  <input style={{height: '36px'}} type="text" placeholder="Search" onChange={this.filterList}/>
                </div>
               
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Môn học</th>
                        <th>Tiêu đề</th>
                        <th>Ảnh</th>
                       
                        <th>Sửa bài học</th>
                        <th>Xóa bài học</th>
                      </tr>
                    </thead>
                    <tbody>
                     {renderTodos}
                    </tbody>
                    <tfoot>
                      <tr>
                      <th>Môn học</th>
                      <th>Tiêu đề</th>
                      <th>Ảnh</th>
                    
                      <th>Sửa bài học</th>
                      <th>Xóa bài học</th>
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
    lession: state.lessionReducer.listlession,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    lessionActionCreators: bindActionCreators(lessionActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentLession);