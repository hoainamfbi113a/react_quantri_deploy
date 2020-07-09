import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as videoLearningAction  from "../../../../actions/videoLearningAction";
class AdminAddItemvideoLearning extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      _id:"",
      videoContentSubjects:'',
      videoContentTitle: '',
      videoContentVideo: '',
      videoContentDetail: '',
      selectedFile: '',
      error: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onChangeImg = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const {videoLearningActionsCreators} = this.props;
    const { setvideoLearningEditing } = videoLearningActionsCreators;
    // console.log(this.props.match.params.id);
    setvideoLearningEditing(this.props.match.params.id);
    // setvideoLearningEditing(12);
    this.setState({
      _id: this.props.videoLearningUpdate._id,
      videoContentSubjects: this.props.videoLearningUpdate.videoContentSubjects,
      videoContentTitle: this.props.videoLearningUpdate.videoContentTitle,
      videoContentVideo: this.props.videoLearningUpdate.videoContentVideo,
      videoContentDetail: this.props.videoLearningUpdate.videoContentDetail,

      // contents: this.props.videoLearningUpdate.contents,
      // timeUpdate: this.props.videoLearningUpdate.timeUpdate,
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
    const { selectedFile, videoContentVideo, videoContentTitle,videoContentSubjects,videoContentDetail } = this.state;
    const formData = new FormData()
    formData.append('_id', this.props.match.params.id);
    formData.append('selectedFile', selectedFile);
    formData.append('videoContentSubjects', videoContentSubjects);
    formData.append('videoContentTitle', videoContentTitle);
    formData.append('videoContentVideo', videoContentVideo);
    formData.append('videoContentDetail', videoContentDetail);
    // formData.append('timeUpdate', timeUpdate);
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
            <h3 className="box-title">Sửa video bài học</h3>
          </div>
          <form className="form-horizontal" onSubmit={this.onSubmit} >
            <div className="box-body">
              <div className="form-group">
                  <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Video của lớp </label>
                  <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Video của lớp"onChange={this.onChange} name="videoContentSubjects" value={this.state.videoContentSubjects}/>
                  </div>
              </div>
              <div className="form-group">
                <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">videoContentTitle</label>
                <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                  <input type="text" className="form-control" id="inputPassword3" placeholder="videoContentTitle" onChange={this.onChange} name="videoContentTitle" value={this.state.videoContentTitle} />
                </div>
              </div>
              <div className="form-group">
                <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">videoContentVideo</label>
                <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                  <input type="text" className="form-control" id="inputPassword3" placeholder="videoContentVideo" onChange={this.onChange} name="videoContentVideo" value={this.state.videoContentVideo} />
                </div>
              </div>
              <div className="form-group">
                <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">videoContentDetail</label>
                <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                  <input type="text" className="form-control" placeholder="videoContentDetail" onChange={this.onChange} name="videoContentDetail" value={this.state.videoContentDetail} />
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
  return { videoLearningUpdate: state.videoLearningReducer.listvideoLearning.find(item => item._id === props.match.params.id) }
}
const mapDispatchToProps = dispatch =>{
  return {
    videoLearningActionsCreators:bindActionCreators(videoLearningAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemvideoLearning);
