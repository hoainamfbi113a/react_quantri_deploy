import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as newsActions from '../../../../actions/newsAction';

import ItemNews from '../Items/ItemNews';

class AdminContentNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      news: [],
      deleteItem: "",
      idAlert:"",
      currentPage: 1,
      newsPerPage: 7,
      filterlist:"",
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
    let { idAlert, news } = this.state;
    const { newsActionCreators } = this.props;
    const { deleteNew } = newsActionCreators;
    deleteNew(idAlert);
    this.setState({
      showAlert:false
    });
  }
  handleEditItem = (index,item) => {
    this.setState({
        indexEdit: index,
        idEdit: item._id,
        titleEdit: item.title,
        imageEdit: item.image,
        contentsEdit: item.contents,
        timeUpdateEdit: item.timeUpdate,
    });
}

  componentDidMount = () => {
   
    this.timeout = setTimeout(() => {
      const { newsActionCreators } = this.props;
      const { fetchListNews } = newsActionCreators;
      fetchListNews();
      }, 200);
  }
  // renderItem = () => {
  //   // console.log(this.props.news)
  //   let { news } = this.props;
  //   return (
  //     news.map((item, index) => {
  //       return (
  //         <ItemNews key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert} handleEditItem={this.handleEditItem}></ItemNews>
  //       )
  //     })
  //   )
  // }
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
    let { news } = this.props;
    let filterList = this.state.filterlist;
    news = news.filter(function(item) {
        return item.title && item.title.toLowerCase().search(filterList.toLowerCase()) !== -1;
      });

    
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = news.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ItemNews stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
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
                  <Link to="news/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm tin tức</button></Link>
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
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Loại tin tức </th>
                        <th>Tiêu đề tin tức </th>
                        <th>Hình ảnh</th>
                        <th>Nội dung tin tức</th>
                        {/* <th>Thời gian update</th> */}
                        <th>Sửa tin tức</th>
                        <th>Xóa tin tức</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {this.renderItem()} */}
                      {renderTodos}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Loại tin tức </th>
                        <th>Tiêu đề tin tức </th>
                        <th>Hình ảnh</th>
                        <th>Nội dung tin tức</th>
                        {/* <th>Thời gian update</th> */}
                        <th>Sửa tin tức</th>
                        <th>Xóa tin tức</th>
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
    news: state.newReducer.listNews,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newsActionCreators: bindActionCreators(newsActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentNews);