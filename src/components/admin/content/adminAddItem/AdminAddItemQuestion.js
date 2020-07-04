import React, { Component } from 'react'
import axios from 'axios';
export default class AdminAddItemQuestion extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          questionCategoryId: 'Toán lớp 1',
          questionName:'',
          questionResultA : '',
          questionResultB : '',
          questionResultC : '',
          questionResultD : '',
          questionResultRight : 'A',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        axios.post('http://localhost:5000/admin/question', {
            _id:this.state._id,
            questionCategoryId: this.state.questionCategoryId,
            questionName: this.state.questionName,
            questionResultA: this.state.questionResultA,
            questionResultB: this.state.questionResultB,
            questionResultC: this.state.questionResultC,
            questionResultD: this.state.questionResultD,
            questionResultRight: this.state.questionResultRight,
           
          })
          .then(function (response) {
            if(response.data ==='User already exists')
              alert('User already exists');
            else{
            r.props.history.push('/admin/question')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       r.props.history.push('/admin/question')
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm câu hỏi</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                <select className="form-control"  onChange={this.onChange}  name="questionCategoryId" >
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
                {/* <input type="text" className="form-control"  placeholder="Loại câu hỏi" onChange={this.onChange} name="questionCategoryId" value={this.state.questionCategoryId}/> */}
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Tên câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Tên câu hỏi"onChange={this.onChange} name="questionName" value={this.state.questionName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án A</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="Đáp án A" onChange={this.onChange} name="questionResultA" value={this.state.questionResultA}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Đáp án B</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án B"onChange={this.onChange} name="questionResultB" value={this.state.questionResultB}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án C</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Đáp án C" onChange={this.onChange} name="questionResultC" value={this.state.questionResultC}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Địa án D</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án D"onChange={this.onChange} name="questionResultD" value={this.state.questionResultD}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án đúng</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="questionResultRight" >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
              </select>
                {/* <input type="text" className="form-control"  placeholder="Đáp án đúng" onChange={this.onChange} name="questionResultRight" value={this.state.questionResultRight}/> */}
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
