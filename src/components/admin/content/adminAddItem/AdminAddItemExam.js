import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as examAction  from "../../../../actions/examAction";
class AdminAddItemExam extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          examName: '',
          // examEasyNumber:'',
          // examMediumNumber : '',
          // examDifficultNumber : '',
          examTimeMake : '',
          classId : 'Toán lớp 1',
          examCategoryNumber : 'Toán lớp 1',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      onSubmit(e) {
      //   var r = this;
      //   e.preventDefault();
      //   axios.post('http://localhost:5000/admin/exam', {
      //       _id:this.state._id,
      //       examName: this.state.examName,
      //       // examEasyNumber: this.state.examEasyNumber,
      //       // examMediumNumber: this.state.examMediumNumber,
      //       // examDifficultNumber: this.state.examDifficultNumber,
      //       examCategoryNumber: this.state.examCategoryNumber,
      //       examTimeMake: this.state.examTimeMake,
      //       classId: this.state.classId,
      //     })
      //     .then(function (response) {
      //       if(response.data ==='User already exists')
      //         alert('User already exists');
      //       else{
      //       r.props.history.push('/admin/exam')
      //       }
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //  r.props.history.push('/admin/exam')
        var r = this;
        e.preventDefault();
        const { examName, examEasyNumber, examMediumNumber,examDifficultNumber,examCategoryNumber,examTimeMake,classId } = this.state;
        let formData={
          
        } ;
        formData.examDifficultNumber=examDifficultNumber;
        formData.examMediumNumber= examMediumNumber;
        formData.examName= examName;
        formData.examEasyNumber=examEasyNumber;
        formData.examCategoryNumber=examCategoryNumber;
        formData.examTimeMake=examTimeMake;
        formData.classId=classId;
        const {examActionsCreators} = this.props;
        const { addexam } = examActionsCreators;
        addexam(formData);
        setTimeout(()=>{
          r.props.history.push('/admin/exam');
        },500)
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm đề thi</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tên đề thi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                
                <input type="text" className="form-control"  placeholder="Tên đề thi" onChange={this.onChange} name="examName" value={this.state.examName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examCategoryNumber">
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
                {/* <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/> */}
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Thời gian làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examTimeMake" >
                  <option value="5 phút">5 phút</option>
                  <option value="10 phút">10 phút</option>
                  <option value="15 phút">15 phút</option>
              </select>
                {/* <input type="text" className="form-control"  placeholder="Thời gian làm bài" onChange={this.onChange} name="examTimeMake" value={this.state.examTimeMake}/> */}
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Lớp làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="classId" >
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
    examActionsCreators:bindActionCreators(examAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemExam)
