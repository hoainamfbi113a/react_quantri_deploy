import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionAction  from "../../../../actions/questionAction";
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
class AdminAddItemQuestion extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          questionCategoryId: 'Toán lớp 1',
          classObject: [],
          questionName:'',
          questionResultA : '',
          questionResultB : '',
          questionResultC : '',
          questionResultD : '',
          questionResultRight : 'A',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      componentDidMount =() =>
      {
        axios.get('http://localhost:5000/admin/classsubject/list/')
          .then(response => {
            this.setState({classObject:response.data})
          })
          .catch(function (error){
            console.log(error +"loi ne");
          })
      }
      renderClass = () =>{
        let{classObject}=this.state;
        console.log(classObject);
    // console.log(questionForum)
        return ( <select className="form-control"  onChange={this.onChange}  name="questionCategoryId" >
                  { classObject.map((item,index)=>{
                    return (
                      <option value={item.classSubjectName}>{item.classSubjectName}</option>
                    )
                      })
                    }
          </select>
        )
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        const {_id, questionCategoryId, questionName, questionResultA,questionResultB,questionResultC,questionResultD,questionResultRight } = this.state;
        let formData={
          
        } ;
        formData._id = _id ;
        formData.questionCategoryId = questionCategoryId ;
        formData.questionName = questionName ;
        formData.questionResultA= questionResultA;
        formData.questionResultB= questionResultB;
        formData.questionResultC= questionResultC;
        formData.questionResultD= questionResultD;
        formData.questionResultRight= questionResultRight;
        const {questionActionsCreators} = this.props;
        const { addquestion } = questionActionsCreators;
        addquestion(formData);
        toastSuccess('Thêm câu hỏi thành công');
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
          <h3 className="box-title">Thêm câu hỏi</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                {this.renderClass(this.state.classObject)}
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
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Địa án D</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án D"onChange={this.onChange} name="questionResultD" value={this.state.questionResultD}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án đúng</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="questionResultRight" >
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
            
            <button type="submit" className="btn btn-info pull-right">Thêm</button>
          </div>
          {/* /.box-footer */}
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
    questionActionsCreators:bindActionCreators(questionAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemQuestion)
