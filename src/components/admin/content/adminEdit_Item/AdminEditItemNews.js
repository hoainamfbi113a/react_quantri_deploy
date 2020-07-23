import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Editor } from '@tinymce/tinymce-react';
import * as newsAction  from "../../../../actions/newsAction";
class AdminAddItemNews extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      categoryNews:'newcategory1',
      title: '',
      images: '',
      contents: '',
      timeUpdate: '',
      selectedFile: '',
      error: {}
    }
    
    this.onChange = this.onChange.bind(this)
    this.onChangeImg = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const {newsActionsCreators} = this.props;
    const { setNewEditing } = newsActionsCreators;
    setNewEditing(this.props.match.params.id);
    this.setState({
      _id: this.props.newUpdate._id,
      categoryNews: this.props.newUpdate.categoryNews,
      title: this.props.newUpdate.title,
      images: this.props.newUpdate.images,
      contents: this.props.newUpdate.contents,
      timeUpdate: this.props.newUpdate.timeUpdate,
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
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    this.setState({
      contents:content
    })
  }
  onSubmit(e) {
    var r = this;
    e.preventDefault();
    const { selectedFile, contents, title, timeUpdate,categoryNews } = this.state;
    const formData = new FormData()
    formData.append('_id', this.props.match.params.id);
    formData.append('selectedFile', selectedFile);
    formData.append('categoryNews', categoryNews);
    formData.append('title', title);
    formData.append('contents', contents);
    formData.append('timeUpdate', timeUpdate);
    const {newsActionsCreators} = this.props;
    const { updateNew } = newsActionsCreators;
    updateNew(formData);
    r.props.history.push('/admin/news');
  }
  render() {
    return (
      <div>
        <section className="content">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Sửa tin tức</h3>
            </div>
            <form className="form-horizontal" onSubmit={this.onSubmit} >
              <div className="box-body">
                 <div className="form-group">
                    <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Loại tin tức giáo dục </label>
                    <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                    <select className="form-control"  onChange={this.onChange}  name="categoryNews" value={this.state.categoryNews}>
                        <option value="newcategory1">Tin tức giáo dục</option>
                        <option value="newcategory2">Học sinh tiêu biểu</option>
            
                    </select>
                      {/* <input type="text" className="form-control" id="inputPassword3" placeholder="Lớp làm bài"onChange={this.onChange} name="classId" value={this.state.classId}/> */}
                    </div>
                </div>
                <div className="form-group">
                  <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">Title</label>
                  <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Title" onChange={this.onChange} name="title" value={this.state.title} />
                  </div>
                </div>
               
                <div className="form-group">
                  <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">images</label>
                  <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                  <input
                  type="file"
                  name="selectedFile"
                  onChange={this.onChange}
                />
                  </div>
                </div>
                <div className="form-group">
                  <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">Contents</label>
                  <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                    {/* <input type="text" className="form-control" id="inputPassword3" placeholder="Contents" onChange={this.onChange} name="contents" value={this.state.contents} /> */}
                    <Editor
                    name="lessionContentDetail"
                    initialValue={this.state.contents}
                      init={{
                        
                      height: 500,
                        menubar: false,
                        plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
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
                {/* <div className="form-group">
                  <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">TimeUpdate</label>
                  <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                    <input type="text" className="form-control" placeholder="TimeUpdate" onChange={this.onChange} name="timeUpdate" value={this.state.timeUpdate} />
                  </div>
                </div> */}
              </div>
              <div className="box-footer" style={{ paddingRight: '69px' }}>
                <button type="submit" className="btn btn-info pull-right">Sua</button>
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
  return { newUpdate: state.newReducer.listNews.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    newsActionsCreators:bindActionCreators(newsAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemNews);
