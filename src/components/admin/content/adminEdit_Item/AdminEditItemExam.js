import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as examAction  from "../../../../actions/examAction";
class AdminEditItemExam extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
      _id:'',
      examName: '',
      examEasyNumber:'',
      examMediumNumber : '',
      examDifficultNumber : '',
      examTimeMake : '',
      classId : '',
    }
}
    componentDidMount() {
      const {examActionsCreators} = this.props;
      const { setexamEditing } = examActionsCreators;
    // console.log(this.props.match.params.id);
      setexamEditing(this.props.match.params.id);
              this.setState({
                  _id:this.props.examUpdate._id,
                  examName: this.props.examUpdate.examName,
                  examEasyNumber:this.props.examUpdate.examEasyNumber,
                  examMediumNumber : this.props.examUpdate.examMediumNumber,
                  examDifficultNumber : this.props.examUpdate.examDifficultNumber,
                  examTimeMake : this.props.examUpdate.examTimeMake,
                  classId : this.props.examUpdate.classId,
                 
                   });
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
    }
    onSubmit(e) {
      var r = this;
      e.preventDefault();
      const {  examMediumNumber, examEasyNumber,examName,examDifficultNumber } = this.state;
      let formData={
      } ;
      // formData.append('selectedFile', selectedFile);
      formData._id=this.props.match.params.id;
      formData.examName=examName;
      formData.examEasyNumber= examEasyNumber;
      formData.examMediumNumber= examMediumNumber;
      formData.examDifficultNumber=examDifficultNumber;
      const {examActionsCreators} = this.props;
      const { updateexam } = examActionsCreators;
      updateexam(formData);
      setTimeout(()=>{
        r.props.history.push('/admin/exam');
      },100)
  }
    render() {
      
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa học sinh</h3>
        </div>
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tên đề thi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                <input type="text" className="form-control"  placeholder="Tên đề thi" onChange={this.onChange} name="examName" value={this.state.examName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examCategoryNumber" value={this.state.classId}>
                  <option value="Anh văn 1">Anh văn 1</option>
                  <option value="Anh văn 2">Anh văn 2</option>
                  <option value="Anh văn 3">Anh văn 3</option>
                  <option value="Anh văn 4">Anh văn 4</option>
                  <option value="Anh văn 5">Anh văn 5</option>
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Toán lớp 3">Toán lớp 3</option>
                  <option value="Toán lớp 4">Toán lớp 4</option>
                  <option value="Toán lớp 5">Toán lớp 5</option>
                  {/* <option value="Anh văn 2">Anh văn 2</option> */}
              </select>
                {/* <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/> */}
              </div>
            </div>
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Số câu dễ</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examEasyNumber" value={this.state.examEasyNumber} >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Số câu dễ"onChange={this.onChange} name="examEasyNumber" value={this.state.examEasyNumber}/>
              </div>
            </div> */}
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Số câu trung bình</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examMediumNumber" value={this.state.examMediumNumber} >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
                <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/>
              </div>
            </div> */}
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Số câu khó</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input readOnly type="text" className="form-control" id="inputPassword3" placeholder="Số câu khó = 10 - số câu dễ - số câu trung bình" onChange={this.onChange} name="examDifficultNumber" />
              </div>
            </div> */}
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Thời gian làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Thời gian làm bài" onChange={this.onChange} name="examTimeMake" value={this.state.examTimeMake}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Lớp làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="classId" value={this.state.classId} >
                  <option value="Anh văn 1">Anh văn 1</option>
                  <option value="Anh văn 2">Anh văn 2</option>
                  <option value="Anh văn 3">Anh văn 3</option>
                  <option value="Anh văn 4">Anh văn 4</option>
                  <option value="Anh văn 5">Anh văn 5</option>
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Toán lớp 3">Toán lớp 3</option>
                  <option value="Toán lớp 4">Toán lớp 4</option>
                  <option value="Toán lớp 5">Toán lớp 5</option>
              </select>
                {/* <input type="text" className="form-control" id="inputPassword3" placeholder="Lớp làm bài"onChange={this.onChange} name="classId" value={this.state.classId}/> */}
              </div>
            </div>
            
            
          </div>
          {/* /.box-body */}
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Sửa</button>
          </div>
          {/* /.box-footer */}
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
  return { examUpdate: state.examReducer.listexam.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    examActionsCreators:bindActionCreators(examAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminEditItemExam);
