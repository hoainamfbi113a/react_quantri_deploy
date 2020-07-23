import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as videoLearningActions from '../../../../actions/videoLearningAction';
import ItemvideoLearning from '../Items/ItemvideoLearning';

class AdminContentvideoLearning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      videoLearning: [],
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
    let { idAlert, videoLearning } = this.state;
    const { videoLearningActionCreators } = this.props;
    const { deletevideoLearning } = videoLearningActionCreators;
    deletevideoLearning(idAlert);
    this.setState({
      showAlert:false
    });
  }
  componentDidMount = () => {
    const { videoLearningActionCreators } = this.props;
    const { fetchListvideoLearning } = videoLearningActionCreators;
    fetchListvideoLearning();
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
    let { videoLearning } = this.props;
    let filterList = this.state.filterlist;
    videoLearning = videoLearning.filter(function(item) {
        return item.videoContentTitle.toLowerCase().search(filterList.toLowerCase()) !== -1;
      });
    
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = videoLearning.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ItemvideoLearning stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videoLearning.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* <div className="box-header">
                  <Link to="videolearning/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm video bài học</button></Link>
                  <div className="news-per-page" style={{marginTop: '10px'}}>
                    <select defaultValue="0" onChange={this.select} >
                      <option value="0" disabled>Get by</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div> */}
                 <div className="box-header">
                  <div >
                  <Link to="videolearning/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm video bài học</button></Link>
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
                        <th>Video của lớp học </th>
                        <th>Tiêu đề của bài học video </th>
                        <th>Video</th>
                        <th>Nội dung video</th>
                        {/* <th>Thời gian update</th> */}
                        <th>Sửa video</th>
                        <th>Xóa video</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTodos}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Video của lớp học </th>
                        <th>Tiêu đề của bài học video </th>
                        <th>video</th>
                        <th>Nội dung video</th>
                        {/* <th>Thời gian update</th> */}
                        <th>Sửa video</th>
                        <th>Xóa video</th>
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
    videoLearning: state.videoLearningReducer.listvideoLearning,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    videoLearningActionCreators: bindActionCreators(videoLearningActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentvideoLearning);