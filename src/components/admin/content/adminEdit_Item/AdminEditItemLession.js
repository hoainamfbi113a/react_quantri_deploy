import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import * as lessionAction  from "../../../../actions/lessionAction";
import { toastSuccess } from '../../../../helpers/toastHelper';

class AdminAddItemlession extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      _id:'',
      lessionContentSubjects:"",
      lessionContentTitle:"",
      lessionContentImg:"",
      lessionContentDetail:"",
      files:[],
      errors: {},
      classObject: [],
    }
    
    this.onChange = this.onChange.bind(this)
    this.onChangeImg = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
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
    console.log('Content was updated:', content);
    this.setState({
      lessionContentDetail:content
    })
  }
  componentDidMount() {
    const {lessionActionsCreators} = this.props;
    const { setlessionEditing } = lessionActionsCreators;
    setlessionEditing(this.props.match.params.id);
    this.setState({
      _id: this.props.lessionUpdate._id,
      lessionContentSubjects: this.props.lessionUpdate.lessionContentSubjects,
      lessionContentTitle: this.props.lessionUpdate.lessionContentTitle,
      lessionContentImg: this.props.lessionUpdate.lessionContentImg,
      lessionContentDetail: this.props.lessionUpdate.lessionContentDetail,
  })
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
  // console.log(classObject);
  return ( <select className="form-control"  onChange={this.onChange}  name="lessionContentSubjects" value={this.state.lessionContentSubjects} >
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
    const { selectedFile, lessionContentImg, lessionContentSubjects, lessionContentTitle,lessionContentDetail } = this.state;
    const formData = new FormData()
    formData.append('_id', this.props.match.params.id);
    formData.append('lessionContentImg', lessionContentImg);
    formData.append('lessionContentSubjects', lessionContentSubjects);
    formData.append('lessionContentTitle', lessionContentTitle);
    formData.append('lessionContentDetail', lessionContentDetail);
    const {lessionActionsCreators} = this.props;
    const { updatelession } = lessionActionsCreators;
    updatelession(formData);
    setTimeout(()=>{
      r.props.history.push('/admin/lession');
    },200)
    
  }
  render() {
    return (
      <div>
        <section className="content">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Sửa nội dung bài học</h3>
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
                <input type="text" className="form-control"  placeholder="Tieu de" onChange={this.onChange} name="lessionContentTitle" value={this.state.lessionContentTitle}/>
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
              initialValue={this.state.lessionContentDetail}
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
            
            <button type="submit" className="btn btn-info pull-right">Sữa nội dung bài học</button>
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
  return { lessionUpdate: state.lessionReducer.listlession.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    lessionActionsCreators:bindActionCreators(lessionAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemlession);
