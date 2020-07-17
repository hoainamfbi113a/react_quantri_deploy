import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as classSubjectActions from '../../../../actions/classSubjectAction';
import ItemclassSubject from '../Items/ItemclassSubject';

class AdminContentclassSubject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      classSubject: [],
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
    let { idAlert, classSubject } = this.state;
    const { classSubjectActionCreators } = this.props;
    const { deleteclassSubject } = classSubjectActionCreators;
    deleteclassSubject(idAlert);
    this.setState({
      showAlert:false
    });
  }
  componentDidMount = () => {
    const { classSubjectActionCreators } = this.props;
    const { fetchListclassSubject } = classSubjectActionCreators;
    fetchListclassSubject();
  }
  renderItem = () => {
    let { classSubject } = this.props;
    return (
      classSubject.map((item, index) => {
        return (
          <ItemclassSubject key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert}></ItemclassSubject>
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
                  <Link to="classSubject/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm lớp môn học</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>

                        <th>Tên lớp học </th>
                        
                        <th>Sửa lớp</th>
                        <th>Xóa lớp</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên lớp học </th>
                        <th>Sửa lớp</th>
                        <th>Xóa lớp</th>
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
    classSubject: state.classSubjectReducer.listclassSubject,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    classSubjectActionCreators: bindActionCreators(classSubjectActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentclassSubject);