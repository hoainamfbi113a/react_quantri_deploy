import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemMember';
// import Items 
export default class AdminContentMember extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[],
       
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
      axios.get('http://localhost:5000/admin/member/delete/'+idAlert)
      .then(()=>{
        axios.get('http://localhost:5000/admin/member/list')
        .then(response => {
            this.setState({persons: response.data});
        })
        .catch(function (error) {
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
      this.countDownTrack = setTimeout(()=>{
        axios.get('http://localhost:5000/admin/member/list')
        .then(response => {
            this.setState({persons: response.data});
            console.log(response.data);
        })
        .catch(function (error) {
        })
      },200)
     
    }
    renderItem = () =>{
      
       let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
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
                <Link to="member/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm học sinh</button></Link>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tên đăng nhập</th>
                        <th>Mật khẩu</th>
                        <th>Họ và tên</th>
                       
                        <th>Giới tính</th>
                       
                        <th>Lớp</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tên đăng nhập</th>
                        <th>Mật khẩu</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        
                        <th>Lớp</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                       
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
