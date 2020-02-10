import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemExam';

// import Items 
export default class AdminContentExam extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[],
        refresh:true
      }
    }
    handleShowAlert = (item) =>{
      this.setState({
        showAlert:true,
        titleAlert: item.name,
        idAlert: item._id
      })
    }
    handleDeleteItem = () => {
      let {idAlert, persons} = this.state;
      axios.get('http://localhost:5000/admin/exam/delete/'+idAlert)
      .then(()=>{
        axios.get('http://localhost:5000/admin/exam/list')
        .then(response => {
            // console.log(response.data);
            this.setState({persons: response.data});
        })
        .catch(function (error) {
            // console.log(error);
        })
      }
      )
      .catch(err => console.log(err))
      this.setState({
          showAlert: false
      });
  }
  handleEditItem = (index,item) => {

    this.setState({
        indexEdit: index,
        idEdit: item._id,
        nameEdit: item.fullname,
        emailEdit: item.email,
       
    });
}
    componentDidMount(){
        axios.get('http://localhost:5000/admin/exam/list')
            .then(response => {
                // console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                // console.log(error);
            })
            const script = document.createElement("script");
            script.style="text/jsx"
            script.src='js/content.js';
            script.async = true;
            document.body.appendChild(script);
    }
    renderItem = () =>{
      
       let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
        console.log(persons);
        return (
         persons.map((item,index)=>{
            return(
              <Item key={item._id}  item={item} index={index}  handleShowAlert={this.handleShowAlert}  handleEditItem = {this.handleEditItem}/>
            )
          })
         
        
        )
    }
    render() {
    
        return (     
       <div>
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                <Link to="exam/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm đề thi</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tên đề thi </th>
                        <th>Loại câu hỏi</th>
                        <th>Thời gian làm bài</th>
                        <th>Lớp làm bài</th>
                        <th>Sửa đề thi</th>
                        <th>Xóa đề thi</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên đề thi </th>
                        <th>Loại câu hỏi</th>
                        <th>Thời gian làm bài</th>
                        <th>Lớp làm bài</th>
                        <th>Sửa đề thi</th>
                        <th>Xóa đề thi</th> 
                      </tr>
                    </tfoot>
                  </table>
                </div>
               
              </div>
             
            </div>
           
          </div>
          <Swal
                            show={this.state.showAlert}
                            title="Delete Item"
                            text="abc"
                            showCancelButton
                            onOutsideClick={()  => this.setState({ showAlert: false })}
                            onEscapeKey={()     => this.setState({ showAlert: false })}
                            onCancel={()        => this.setState({ showAlert: false })}
                            onConfirm={() => this.handleDeleteItem()}
           />
        </section>
       
        </div>    
          

        )
    }
}
