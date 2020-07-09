import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as videoLearningAction  from "../../../../actions/videoLearningAction";
class AdminAddItemvideoLearning extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
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
    const { videoContentVideo, videoContentDetail, videoContentTitle,videoContentSubjects } = this.state;
    let formData={
      
    } ;
    // formData.append('selectedFile', selectedFile);
    formData.videoContentSubjects=videoContentSubjects;
    formData.videoContentTitle= videoContentTitle;
    formData.videoContentVideo= videoContentVideo;
    formData.videoContentDetail=videoContentDetail;
    // formData.append('timeUpdate', timeUpdate);
    const {videoLearningActionsCreators} = this.props;
    const { addvideoLearning } = videoLearningActionsCreators;
    addvideoLearning(formData);
    r.props.history.push('/admin/videolearning');
  }
  render() {
    return (
      <div>
        <section className="content">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Thêm video bài học</h3>
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

                <button type="submit" className="btn btn-info pull-right">Thêm</button>
              </div>
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
    videoLearningActionsCreators:bindActionCreators(videoLearningAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemvideoLearning)
