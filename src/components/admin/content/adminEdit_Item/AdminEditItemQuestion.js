import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionAction  from "../../../../actions/questionAction";
class AdminEditItemQuestion extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
          _id:'',
          questionCategoryId: '',
          questionName:'',
          questionResultA : '',
          questionResultB : '',
          questionResultC : '',
          questionResultD : '',
          questionResultRight : '',
    }
}
    componentDidMount() {
      const {questionActionsCreators} = this.props;
      const { setquestionEditing } = questionActionsCreators;
      // console.log(this.props.match.params.id);
      setquestionEditing(this.props.match.params.id);
              this.setState({
                  _id:this.props.questionUpdate._id,
                  questionCategoryId: this.props.questionUpdate.questionCategoryId,
                  questionName: this.props.questionUpdate.questionName,
                  questionResultA : this.props.questionUpdate.questionResultA,
                  questionResultB : this.props.questionUpdate.questionResultB,
                  questionResultC : this.props.questionUpdate.questionResultC,
                  questionResultD : this.props.questionUpdate.questionResultD,
                  questionResultRight : this.props.questionUpdate.questionResultRight,
              })
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
    }
    onSubmit(e) {
      var r = this;
      e.preventDefault();
      const {  questionResultA, questionName,questionCategoryId,questionResultB,questionResultC,questionResultD,questionResultRight } = this.state;
      let formData={
      
      } ;
      // formData.append('selectedFile', selectedFile);
      formData._id=this.props.match.params.id;
      formData.questionCategoryId=questionCategoryId;
      formData.questionName= questionName;
      formData.questionResultA= questionResultA;
      formData.questionResultB=questionResultB;
      formData.questionResultC=questionResultC;
      formData.questionResultD=questionResultD;
      formData.questionResultRight=questionResultRight;
      const {questionActionsCreators} = this.props;
      const { updatequestion } = questionActionsCreators;
      updatequestion(formData);
      setTimeout(()=>{
        r.props.history.push('/admin/question');
      },100)
  }
    render() {
      
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa câu hỏi</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
              {/* <input  type="text"
                            className="form-control"
                            value={this.state.fullname}
                            onChange={this.onChangeName} /> */}

                <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                <select className="form-control"  onChange={this.onChange}  name="questionCategoryId" value={this.state.questionCategoryId} >
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
                {/* <input type="text" className="form-control"  placeholder="Loại câu hỏi" onChange={this.onChange} name="questionCategoryId" value={this.state.questionCategoryId}/> */}
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Tên câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Tên câu hỏi"onChange={this.onChange} name="questionName" value={this.state.questionName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án A</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="Đáp án A" onChange={this.onChange} name="questionResultA" value={this.state.questionResultA}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Đáp án B</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án B"onChange={this.onChange} name="questionResultB" value={this.state.questionResultB}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án C</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Đáp án C" onChange={this.onChange} name="questionResultC" value={this.state.questionResultC}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Đáp án D</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án D"onChange={this.onChange} name="questionResultD" value={this.state.questionResultD}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án đúng</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="questionResultRight" value={this.state.questionResultRight}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
              </select>
                {/* <input type="text" className="form-control"  placeholder="Đáp án đúng" onChange={this.onChange} name="questionResultRight" value={this.state.questionResultRight}/> */}
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
  return { questionUpdate: state.questionReducer.listquestion.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    questionActionsCreators:bindActionCreators(questionAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminEditItemQuestion);
