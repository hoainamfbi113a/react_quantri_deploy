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
      idAlert:""
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
    const { newsActionCreators } = this.props;
    const { fetchListNews } = newsActionCreators;
    fetchListNews();
  }
  renderItem = () => {
    // console.log(this.props.news)
    let { news } = this.props;
    return (
      news.map((item, index) => {
        return (
          <ItemNews key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert} handleEditItem={this.handleEditItem}></ItemNews>
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
                  <Link to="news/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm tin tức</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tiêu đề tin tức </th>
                        <th>Hình ảnh</th>
                        <th>Nội dung tin tức</th>
                        <th>Thời gian update</th>
                        <th>Sửa tin tức</th>
                        <th>Xóa tin tức</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tiêu đề tin tức </th>
                        <th>Hình ảnh</th>
                        <th>Nội dung tin tức</th>
                        <th>Thời gian update</th>
                        <th>Sửa tin tức</th>
                        <th>Xóa tin tức</th>
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