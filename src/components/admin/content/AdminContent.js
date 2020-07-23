import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Item from './Items/Item';
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import $ from 'jquery'
// import Items 
export default class AdminContent extends Component {
    constructor(props){
      super(props)
      this.state = {
        showAlert:false,
        idAlert:"",
        persons:[]
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
      axios.get('http://localhost:5000/employee/delete/'+idAlert)
      .then(()=>{
        axios.get('http://localhost:5000/employee/list')
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
        axios.get('http://localhost:5000/employee/list')
            .then(response => {
                // console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                // console.log(error);
            })
            const script = document.createElement("script");
            script.src='public/js/content.js'
            script.async = true;
            document.body.appendChild(script);
            //  $(document).ready(function () {
            //   $("#example1").DataTable();
            //   $('#example2').DataTable({
            //     "paging": true,
            //     "lengthChange": false,
            //     "searching": false,
            //     "ordering": true,
            //     "info": true,
            //     "autoWidth": false
            //   });
            // });
        
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
         <section className="content-background">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
              <h1>Chào mừng bạn đến với trang quản ly</h1>
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
         

        )
    }
}