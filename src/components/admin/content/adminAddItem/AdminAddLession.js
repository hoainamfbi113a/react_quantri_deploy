import React, { Component } from 'react'
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as lessionActions from '../../../../actions/lessionAction';
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
class AdminAddItemlession extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          lessionContentSubjects:"Toán lớp 1",
          lessionContentTitle:"",
          lessionContentImg:"",
          lessionContentDetail:"",
          files:[],
          errors: {},
          classObject: [],
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      // onChange(e) {
      //   this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      // }
      onChange = (e) => {
        switch (e.target.name) {
          case 'lessionContentImg':
            this.setState({ lessionContentImg: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }
      handleEditorChange = (content, editor) => {
        // console.log('Content was updated:', content);
        this.setState({
          lessionContentDetail:content
        })
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
        // console.log(classObject);
        return ( <select className="form-control"  onChange={this.onChange}  name="lessionContentSubjects" >
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
        const { lessionContentSubjects, lessionContentTitle, lessionContentImg, lessionContentDetail } = this.state;
        const formData = new FormData()
        formData.append('lessionContentImg', lessionContentImg);
        formData.append('lessionContentSubjects', lessionContentSubjects);
        formData.append('lessionContentTitle', lessionContentTitle);
        formData.append('lessionContentDetail', lessionContentDetail);
        const {lessionActionsCreators} = this.props;
        const { addlession } = lessionActionsCreators;
        addlession(formData);
        toastSuccess('Thêm nội dung bài học thành công');
        // r.props.history.push('/admin/news');
        setTimeout (()=>{
          r.props.history.push('/admin/lession')
        },220)
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
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Môn học</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                {this.renderClass()}
               </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tiêu đề</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Tiêu đề" onChange={this.onChange} name="lessionContentTitle" value={this.state.lessionContentTitle}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Ảnh</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <input
                  type="file"
                  name="lessionContentImg"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Nội dung bài học</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <Editor
                    name="lessionContentDetail"
                      init={{
                      height: 500,
                        menubar: false,
                        plugins: [
                        // 'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                          ],
                        toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                          alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
              }}
                            onEditorChange={this.handleEditorChange}
             />
                </div>
            </div>
            
          </div>
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Thêm bài học</button>
          </div>
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
    lessionActionsCreators:bindActionCreators(lessionActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemlession)