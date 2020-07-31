import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
import * as classSubjectAction  from "../../../../actions/classSubjectAction";
class AdminAddItemclassSubject extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      _id:"",
      classSubjectName:'',
      error: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onChangeImg = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const {classSubjectActionsCreators} = this.props;
    const { setclassSubjectEditing } = classSubjectActionsCreators;
    // console.log(this.props.match.params.id);
    setclassSubjectEditing(this.props.match.params.id);
    // setclassSubjectEditing(12);
    this.setState({
      _id: this.props.classSubjectUpdate._id,
      classSubjectName: this.props.classSubjectUpdate.classSubjectName,

      // contents: this.props.classSubjectUpdate.contents,
      // timeUpdate: this.props.classSubjectUpdate.timeUpdate,
  })
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
    const {  classSubjectName } = this.state;
    let formData={
      
    } ;
    // formData.append('selectedFile', selectedFile);
    formData._id=this.props.match.params.id;
    formData.classSubjectName=classSubjectName;
    // const {newsActionsCreators} = this.props;
    // const { updateNew } = newsActionsCreators;
    const {classSubjectActionsCreators} = this.props;
    const { updateclassSubject } = classSubjectActionsCreators;
    updateclassSubject(formData);
    toastSuccess('Cập nhật lớp học thành công');
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
            <h3 className="box-title">Sửa tên lớp học</h3>
          </div>
          <form className="form-horizontal" onSubmit={this.onSubmit} >
            <div className="box-body">
              <div className="form-group">
                  <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Tên của lớp </label>
                  <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Video của lớp"onChange={this.onChange} name="classSubjectName" value={this.state.classSubjectName}/>
                  </div>
              </div>
            
            </div>
            <div className="box-footer" style={{ paddingRight: '69px' }}>

              <button type="submit" className="btn btn-info pull-right">Sửa</button>
            </div>
          </form>
        </div>
      </section>

    </div>
    )
  }
}
const mapStateToProps = (state, props) =>{
  // console.log(state.newReducer.listNews.find(item => item._id === props.match.params.id));
  // console.log(props.match.params.id)
  return { classSubjectUpdate: state.classSubjectReducer.listclassSubject.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    classSubjectActionsCreators:bindActionCreators(classSubjectAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemclassSubject);
