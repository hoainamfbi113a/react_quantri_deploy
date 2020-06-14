import React, {Component} from 'react'
import axios from 'axios';
export default class AdminAddItemNews extends Component{
    constructor(prop){
        super(prop)
        this.state={
            newsCategoryId: 'Tin tuc giao duc',
            title:'',
            image:'',
            contents:'',
            timeUpdate:'',
            error:{}    
        }
        this.onChange= this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e){
        var r= this;
        e.preventDefault();
        axios.post('http://localhost:5000/admin/news', {
            _id: this.state._id,
            newsCategoryId:this.state.newsCategoryId,
            title:this.state.title,
            image:this.state.image,
            contents:this.state.contents,
            timeUpdate:this.state.timeUpdate,
        })
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
                {/* /.box-header */}
                {/* form start */}
                <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
                  <div className="box-body">
                    {/* <div className="form-group">
                      <label style={{ textAlign: 'left' }} htmlFor="inputEmail3" className="col-sm-2 control-label">Til</label>
                      <div className="col-sm-10" style={{ marginLeft: '-5%' }} >
                        <input type="hidden" className="form-control" placeholder="text" onChange={this.onChange} name="_id" value={this.state._id} />
                        <select className="form-control" onChange={this.onChange} name="questionCategoryId" >
                          <option value="Toán lớp 1">Toán lớp 1</option>
                          <option value="Toán lớp 2">Toán lớp 2</option>
                          <option value="Anh văn 1">Anh văn 1</option>
    
                        </select>
                        {/* <input type="text" className="form-control"  placeholder="Loại câu hỏi" onChange={this.onChange} name="questionCategoryId" value={this.state.questionCategoryId}/> */}
                      {/* </div>
                    </div> */} 
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
