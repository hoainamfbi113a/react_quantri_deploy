import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
import * as classSubjectAction  from "../../../../actions/classSubjectAction";
class AdminAddItemclassSubject extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      classSubjectName:'',
    }
    this.onChange = this.onChange.bind(this)
    this.onChangeImg = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }
  onSubmit(e) {
    var r = this;
    e.preventDefault();
    const { classSubjectName } = this.state;
    let formData={
      
    } ;
    // formData.append('selectedFile', selectedFile);
    formData.classSubjectName=classSubjectName;
    // formData.append('timeUpdate', timeUpdate);
    const {classSubjectActionsCreators} = this.props;
    const { addclassSubject } = classSubjectActionsCreators;
    addclassSubject(formData);
    toastSuccess('Thêm mới lớp học thành công');
    setTimeout(()=>{
      r.props.history.push('/admin/classsubject');
    },100)
  }
  render() {
    return (
      <div>
        <section className="content">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Thêm lớp học</h3>
            </div>
            <form className="form-horizontal" onSubmit={this.onSubmit} >
              <div className="box-body">
                <div className="form-group">
                    <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Tên của lớp học </label>
                    <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                      <input type="text" className="form-control" id="inputPassword3" placeholder="Tên của lớp học"onChange={this.onChange} name="classSubjectName" value={this.state.classSubjectName}/>
                    </div>
                </div>
               


              </div>
              <div className="box-footer" style={{ paddingRight: '69px' }}>

                <button type="submit" className="btn btn-info pull-right">Thêm</button>
              </div>
            </form>
          </div>
        </section>

      </div>
    )
  }
}
const mapStateToProps = state =>{

}
const mapDispatchToProps = dispatch =>{
  return {
    classSubjectActionsCreators:bindActionCreators(classSubjectAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemclassSubject)
