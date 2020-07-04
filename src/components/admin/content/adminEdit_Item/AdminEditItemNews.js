import React, { Component } from 'react'
import axios from 'axios';
export default class AdminEditItem extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
          _id:'',
          newsCategoryId: 'Tin tuc giao duc',
            title:'',
            image:'',
            contents:'',
            timeUpdate:'',
            error:{}    
    }
}
    componentDidMount() {
      axios.get('http://localhost:5000/admin/news/'+this.props.match.params.id)
          .then(response => {
            console.log(response.data);
              this.setState({
                  _id:this.props.match.params.id,
                  newsCategoryId: response.data.newsCategoryId,
                  title:response.data.title,
                  image : response.data.image,
                  contents : response.data.contents,
                  timeUpdate : response.data.timeUpdate,
                   });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
    }
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        _id: this.state._id,
        newsCategoryId:this.state.newsCategoryId,
        title:this.state.title,
        image:this.state.image,
        contents:this.state.contents,
        timeUpdate:this.state.timeUpdate,
      };
      axios.post('http://localhost:5000/admin/news', obj)
          .then(res => console.log(res.data));

      this.props.history.push('/admin/news');
  }
    render() {
      {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa tin tức</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
          <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">Title</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Title" onChange={this.onChange} name="title" value={this.state.title} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">Image</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
    
                        <input type="text" className="form-control" placeholder="Image" onChange={this.onChange} name="image" value={this.state.image} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">Contents</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Contents" onChange={this.onChange} name="contents" value={this.state.contents} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">TimeUpdate</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                        <input type="text" className="form-control" placeholder="TimeUpdate" onChange={this.onChange} name="timeUpdate" value={this.state.timeUpdate} />
                      </div>
                    </div>
                    </div>
                  {/* /.box-body */}
                  <div className="box-footer" style={{ paddingRight: '69px' }}>
    
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
}
