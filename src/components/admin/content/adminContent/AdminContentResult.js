import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemResult';
// import Items 
export default class AdminContentQuestion extends Component {
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
      axios.get('http://localhost:5000/admin/question/delete/'+idAlert)
      .then(()=>{
        axios.get('http://localhost:5000/admin/question/list')
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
 
    componentDidMount(){ 
        axios.get('http://localhost:5000/admin/result/list')
            .then(response => {
                // console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                // console.log(error);
            })
    }
    renderItem = () =>{
      
       let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
        console.log(persons);
        return (
         persons.map((item,index)=>{
            return(
              <Item key={item._id}  item={item} index={index}  handleShowAlert={this.handleShowAlert}/>
            )
          })
         
        
        )
    }
    render() {
    
        return (     
       
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
               </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Số câu đúng</th>
                        <th>Số câu sai</th>
                        <th>Tên đề thi</th>
                        <th>Học sinh làm bài</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                      <th>Số câu đúng</th>
                      <th>Số câu sai</th>
                      <th>Tên đề thi</th>
                      <th>Học sinh làm bài</th>    
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
       
                  
          

        )
    }
}
