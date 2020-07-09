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
    let { idAlert, videoLearning } = this.state;
    const { videoLearningActionCreators } = this.props;
    const { deleteNew } = videoLearningActionCreators;
    deleteNew(idAlert);
    this.setState({
      showAlert:false
    });
  }
  componentDidMount = () => {
    const { videoLearningActionCreators } = this.props;
    const { fetchListvideoLearning } = videoLearningActionCreators;
    fetchListvideoLearning();
  }
  renderItem = () => {
    let { videolearning } = this.props;
    return (
      videolearning.map((item, index) => {
        return (
          <ItemvideoLearning key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert}></ItemvideoLearning>
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
                  <Link to="videolearning/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm video bài học</button></Link>
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
                      {this.renderItem()}
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
    videoLearning: state.newReducer.listvideoLearning,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    videoLearningActionCreators: bindActionCreators(videoLearningActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentvideoLearning);