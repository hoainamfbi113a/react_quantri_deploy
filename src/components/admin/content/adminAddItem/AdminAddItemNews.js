import React, {Component} from 'react'
import axios from 'axios';

const config = {
  headers:{
      "content-type":"multipart/form-data’"
      }
  }
export default class AdminAddItemNews extends Component{
    constructor(prop){
        super(prop)
        this.state={
            newsCategoryId: 'Tin tuc giao duc',
            title:'',
            images:'',
            contents:'',
            timeUpdate:'',
            selectedFile:'',
            error:{}    
        }
        this.onChange= this.onChange.bind(this)
        this.onChangeImg= this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    onChangeImg (e){
      console.log(e.target.files[0])
      // this.setState({ images: e.target.files[0] })
      this.setState({ images: e.target.files[0] })
    }
    onChanges = (e) => {
      switch (e.target.name) {
        case 'selectedFile':
          this.setState({ selectedFile: e.target.files[0] });
          break;
        default:
          this.setState({ [e.target.name]: e.target.value });
      }
    }
    
    onSubmit(e){
        var r= this;
        e.preventDefault();
        const { selectedFile, images,contents,title,timeUpdate } = this.state;
        const formData = new FormData()

        // formData.append('description', description);
        // formData.append('images', images);
        formData.append('selectedFile', selectedFile);
        formData.append('title', title);
        formData.append('contents', contents);
        formData.append('timeUpdate', timeUpdate);
        console.log(this.state);
        axios.post('http://localhost:5000/admin/news', formData,config
        //{
            // _id: this.state._id,
            // newsCategoryId:this.state.newsCategoryId,
            // title:this.state.title,
            // images:this.state.images,
            // contents:this.state.contents,
            // timeUpdate:this.state.timeUpdate,
        //}
        )
        .then(function(response){
            console.log(response.data+"aaaaa");
            if(response.data==='User already exists')
            {
                alert('User already exists')
            }
            else{
                r.props.history.push('/admin/news')
            }
        })
        .catch(function(error){
            console.log(error);
      
        });
    r.props.history.push('/admin/news')
    }
    render(){
        return(
            <div>
            <section className="content">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Thêm tin tức</h3>
                </div>
                <form className="form-horizontal" onSubmit={this.onSubmit} >
                  <div className="box-body">
                    <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputPassword3" className="col-sm-2 control-label">Title</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Title" onChange={this.onChange} name="title" value={this.state.title} />
                      </div>
                    </div>
                    <input
                      type="file"
                      name="selectedFile"
                      onChange={this.onChanges}
                    />
                    <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">images</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }}>
    
                        {/* <input type="file" className="form-control" placeholder="images" onChange={this.onChangeImg} name="images" /> */}
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
