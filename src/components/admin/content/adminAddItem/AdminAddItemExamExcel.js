import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as examAction  from "../../../../actions/examAction";
import { toastSuccess } from '../../../../helpers/toastHelper';
class AdminAddItemExam extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          examName: '',
          examTimeMake : '05 phút',
          classId : 'Toán lớp 1',
          examCategoryNumber : 'Toán lớp 1',
          errors: {},
          classObject: [],
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      componentDidMount() {
        axios.get('https://cititechnodejs.herokuapp.com/admin/classsubject/list/')
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
        return ( <select className="form-control"  onChange={this.onChange}  name="classId" >
                  { classObject.map((item,index)=>{
                    return (
                      <option value={item.classSubjectName}>{item.classSubjectName}</option>
                    )
                      })
                    }
          </select>
        )
      }
      renderCategoryQuestion = () =>{
        let{classObject}=this.state;
        console.log(classObject);
        return ( <select className="form-control"  onChange={this.onChange}  name="examCategoryNumber" >
                  { classObject.map((item,index)=>{
                    return (
                      <option value={item.classSubjectName}>{item.classSubjectName}</option>
                    )
                      })
                    }
          </select>
        )
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      onChangefile = (e) =>{
        // alert("change file")
        switch (e.target.name) {
          case 'file':
            this.setState({ file: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        const { examName, examEasyNumber, examMediumNumber,examDifficultNumber,file,examTimeMake,classId } = this.state;
        const formData = new FormData()
        formData.append('examDifficultNumber',examDifficultNumber);
        formData.append('examMediumNumber',examMediumNumber);
        formData.append('examName',examName);
        formData.append('examEasyNumber',examEasyNumber);
        formData.append('file', file);
        formData.append('examTimeMake',examTimeMake);
        formData.append('classId',classId);
        const {examActionsCreators} = this.props;
        const { addexam } = examActionsCreators;
        addexam(formData);
        // toastSuccess('Thêm bài kiểm tra thành công');
        setTimeout(()=>{
          r.props.history.push('/admin/exam');
        },900)
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm đề thi</h3>
        </div>
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
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Import file excel</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
               <input
                      type="file"
                      name="file"
                      onChange={this.onChangefile}
                    />
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Thời gian làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examTimeMake" >
                  <option value="05 phút">05 phút</option>
                  <option value="10 phút">10 phút</option>
                  <option value="15 phút">20 phút</option>
              </select>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Lớp làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              {this.renderClass()}
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
  return {}
}
const mapDispatchToProps = dispatch =>{
  return {
    examActionsCreators:bindActionCreators(examAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemExam)
