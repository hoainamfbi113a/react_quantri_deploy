import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as forumActions from '../../../../actions/forumAction';
import Itemforum from '../Items/Itemforum';

class AdminContentforum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      forum: [],
      deleteItem: "",
      idAlert:"",
      currentPage: 1,
      newsPerPage: 7
    }
  }
  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item._id,
      deleteItem: item.title
    })
  }
  handleDeleteItem = async() => {
    let { idAlert, forum } = this.state;
    const { forumActionCreators } = this.props;
    const { deleteforum } = forumActionCreators;
    deleteforum(idAlert);
    this.setState({
      showAlert:false
    });
  }
  componentDidMount = () => {
    
    setTimeout(()=>{
      const { forumActionCreators } = this.props;
      const { fetchListforum } = forumActionCreators;
      fetchListforum();
    },150)
    
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
    let { forum } = this.props;
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = forum.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return <Itemforum stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(forum.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                 
                    <div className="news-per-page" style={{marginTop: '10px'}}>
                    <select defaultValue="0" onChange={this.select} >
                      <option value="0" disabled>Get by</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>member </th>
                        <th>classForumQuestion </th>
                        <th>question form</th>
                     
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTodos}
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>member </th>
                      <th>classForumQuestion </th>
                      <th>question form</th>
                   
                      <th>Xoá</th>
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
                                 text={this.state.deleteItem}
                                 showCancelButton
                                 onOutsideClick={()  => this.setState({ showAlert: false })}
                                 onEscapeKey={()     => this.setState({ showAlert: false })}
                                 onCancel={()        => this.setState({ showAlert: false })}
                                 onConfirm={() => this.handleDeleteItem()}
                /> 
        </section>

      </div>


    );
  }
}
const mapStateToProps = state => {
  return {
    forum: state.forumReducer.listforum,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    forumActionCreators: bindActionCreators(forumActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentforum);