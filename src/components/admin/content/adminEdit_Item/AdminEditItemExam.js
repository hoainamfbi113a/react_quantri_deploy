import React, { Component } from 'react'
import axios from 'axios';
export default class AdminEditItemExam extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.state = {
      _id:'',
      examName: '',
      examEasyNumber:'',
      examMediumNumber : '',
      examDifficultNumber : '',
      examTimeMake : '',
      classId : '',
     
    }
}
    componentDidMount() {
      // alert('updatemember')
      axios.get('http://localhost:5000/admin/exam/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  _id:this.props.match.params.id,
                  examName: response.data.examName,
                  examEasyNumber:response.data.examEasyNumber,
                  examMediumNumber : response.data.examMediumNumber,
                  examDifficultNumber : response.data.examDifficultNumber,
                  examTimeMake : response.data.examTimeMake,
                  classId : response.data.classId,
                 
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
            examName: this.state.examName,
            examEasyNumber: this.state.examEasyNumber,
            examMediumNumber: this.state.examMediumNumber,
            examDifficultNumber: this.state.examDifficultNumber,
            examTimeMake: this.state.examTimeMake,
            classId: this.state.classId,
          
      };
      axios.post('http://localhost:5000/admin/exam', obj)
          .then(res => console.log(res.data));

      this.props.history.push('/admin/exam');
  }
    render() {
      
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Sửa học sinh</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tên đề thi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                <input type="text" className="form-control"  placeholder="Tên đề thi" onChange={this.onChange} name="examName" value={this.state.examName}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examCategoryNumber">
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Anh văn 1">Anh văn 1</option>
                  {/* <option value="Anh văn 2">Anh văn 2</option> */}
              </select>
                {/* <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/> */}
              </div>
            </div>
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Số câu dễ</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examEasyNumber" value={this.state.examEasyNumber} >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
                <input type="text" className="form-control" id="inputPassword3" placeholder="Số câu dễ"onChange={this.onChange} name="examEasyNumber" value={this.state.examEasyNumber}/>
              </div>
            </div> */}
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Số câu trung bình</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="examMediumNumber" value={this.state.examMediumNumber} >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
                <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/>
              </div>
            </div> */}
            {/* <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Số câu khó</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input readOnly type="text" className="form-control" id="inputPassword3" placeholder="Số câu khó = 10 - số câu dễ - số câu trung bình" onChange={this.onChange} name="examDifficultNumber" />
              </div>
            </div> */}
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Thời gian làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Thời gian làm bài" onChange={this.onChange} name="examTimeMake" value={this.state.examTimeMake}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Lớp làm bài</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="classId" value={this.state.classId} >
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Anh văn 1">Anh văn 1</option>
              </select>
                {/* <input type="text" className="form-control" id="inputPassword3" placeholder="Lớp làm bài"onChange={this.onChange} name="classId" value={this.state.classId}/> */}
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
