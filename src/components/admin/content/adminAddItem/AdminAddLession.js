import React, { Component } from 'react'
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
// import QuillEditor from '../../QuillEditor';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AdminAddItemMember extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          lessionContentSubjects:"Anh văn 1",
          lessionContentTitle:"",
          lessionContentImg:"",
          lessionContentDetail:"",
          files:[],
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      // onChange(e) {
      //   this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      // }
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
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        const { lessionContentSubjects, lessionContentTitle, lessionContentImg, lessionContentDetail } = this.state;
        const formData = new FormData()
        formData.append('lessionContentImg', lessionContentImg);
        formData.append('lessionContentSubjects', lessionContentSubjects);
        formData.append('lessionContentTitle', lessionContentTitle);
        formData.append('lessionContentDetail', lessionContentDetail);
        axios.post('http://localhost:5000/admin/lession', formData
          )
          .then(function (response) {
            if(response.data ==='User already exists')
              alert('User already exists');
            else{
            r.props.history.push('/admin/lession')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       r.props.history.push('/admin/lession')
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm đề thi</h3>
        </div>
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Môn học</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                <select className="form-control"  onChange={this.onChange}  name="lessionContentSubjects" >
                
                  <option value="Anh văn 1">Anh văn lớp 1</option>
                  <option value="Anh văn 2">Anh văn lớp 2</option>
                  <option value="Anh văn 3">Anh văn lớp 3</option>
                  <option value="Anh văn 4">Anh văn lớp 4</option>
                  <option value="Anh văn 5">Anh văn lớp 5</option>
                  <option value="Toán lớp 1">Toán lớp 1</option>
                  <option value="Toán lớp 2">Toán lớp 2</option>
                  <option value="Toán lớp 3">Toán lớp 3</option>
                  <option value="Toán lớp 4">Toán lớp 4</option>
                  <option value="Toán lớp 5">Toán lớp 5</option>
               </select>
               {/* <input type="text" className="form-control"  placeholder="Mon hoc" onChange={this.onChange} name="lessionContentSubjects" value={this.state.lessionContentSubjects}/> */}
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
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Noi dung bai hoc</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              {/* <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={this.onEditorChange}
                onFilesChange={this.onFilesChange}
            /> */}

              {/* <CKEditor
                    editor = {ClassicEditor}
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    // onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    onChange={this.handleEditorChange}
                    data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
                   
                /> */}
              <Editor
              name="lessionContentDetail"
              //  initialValue="<p>This is the initial content of the editor</p>"
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
            
          </div>
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Thêm</button>
          </div>
        </form>
      </div>
      </section>
     
            </div>

        )
    }
}
