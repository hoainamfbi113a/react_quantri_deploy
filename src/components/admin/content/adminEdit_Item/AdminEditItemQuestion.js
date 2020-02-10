import React, { Component } from 'react'
import axios from 'axios';
export default class AdminEditItem extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
          _id:'',
          questionCategoryId: '',
          questionName:'',
          questionResultA : '',
          questionResultB : '',
          questionResultC : '',
          questionResultD : '',
          questionResultRight : '',
    }
}
    componentDidMount() {
      axios.get('http://localhost:5000/admin/question/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  _id:this.props.match.params.id,
                  questionCategoryId: response.data.questionCategoryId,
                  questionName:response.data.questionName,
                  questionResultA : response.data.questionResultA,
                  questionResultB : response.data.questionResultB,
                  questionResultC : response.data.questionResultC,
                  questionResultD : response.data.questionResultD,
                  questionResultRight : response.data.questionResultRight,
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
            _id:this.state._id,
            questionCategoryId: this.state.questionCategoryId,
            questionName: this.state.questionName,
            questionResultA: this.state.questionResultA,
            questionResultB: this.state.questionResultB,
            questionResultC: this.state.questionResultC,
            questionResultD: this.state.questionResultD,
            questionResultRight: this.state.questionResultRight,
      };
      axios.post('http://localhost:5000/admin/question', obj)
          .then(res => console.log(res.data));

      this.props.history.push('/admin/question');
  }
    render() {
      {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa câu hỏi</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
              {/* <input  type="text"
                            className="form-control"
                            value={this.state.fullname}
                            onChange={this.onChangeName} /> */}

                <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                <select className="form-control"  onChange={this.onChange}  name="questionCategoryId" value={this.state.questionCategoryId} >
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Anh văn 1">Anh văn 1</option>
                 
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
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Đáp án D</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Đáp án D"onChange={this.onChange} name="questionResultD" value={this.state.questionResultD}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Đáp án đúng</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="questionResultRight" value={this.state.questionResultRight}>
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
