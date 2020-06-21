import React, { Component } from 'react'
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react';
import QuillEditor from '../../QuillEditor';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AdminAddItemMember extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          lessionContentSubjects:"",
          lessionContentTitle:"",
          lessionContentImg:"",
          lessionContentDetail:"",
          files:[],
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
      }
      // handleEditorChange = (e,editor) => {
      //   // console.log('Content was updated:', e.target.getContent());
      //   const data = editor.getData();
      //   console.log(data);
      //   this.setState({
      //     lessionContentDetail:data
      //   })
      // }
      onEditorChange = (value) => {
           this.setState({
          lessionContentDetail:value
          })
        console.log(value)
    }

    onFilesChange = (files) => {
      this.setState({
        files:files
        })
    }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        axios.post('http://localhost:5000/admin/lession', {
            _id:this.state._id,
            lessionContentSubjects: this.state.lessionContentSubjects,
            lessionContentTitle: this.state.lessionContentTitle,
            lessionContentImg: this.state.lessionContentImg,
            lessionContentDetail: this.state.lessionContentDetail,
          })
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
               <input type="text" className="form-control"  placeholder="Mon hoc" onChange={this.onChange} name="lessionContentSubjects" value={this.state.lessionContentSubjects}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Tieu de</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Tieu de" onChange={this.onChange} name="lessionContentTitle" value={this.state.lessionContentTitle}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Anh</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
                <input type="text" className="form-control"  placeholder="Anh" onChange={this.onChange} name="lessionContentImg" value={this.state.lessionContentImg}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Noi dung bai hoc</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={this.onEditorChange}
                onFilesChange={this.onFilesChange}
            />

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
              {/* <Editor
              name="lessionContentDetail"
               initialValue="<p>This is the initial content of the editor</p>"
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
             /> */}
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
