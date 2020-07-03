import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import Item from '../Items/ItemLession';
import { withRouter  } from 'react-router'
// import Items 
class AdminContentLession extends Component {
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
 
  async componentDidMount(){
        console.log("xin chao lession")
     await axios.get('http://localhost:5000/admin/lession/list')
            .then(response => {
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            })
    }
    renderItem = () =>{
       let {persons} = this.state; 
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
                <Link to="lession/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm bài học</button></Link>
               </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Môn học</th>
                        <th>Tiêu đề</th>
                        <th>Ảnh</th> 
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderItem()}
                    </tbody>
                    <tfoot>
                      <tr>
                      <th>Môn học</th>
                      <th>Tiêu đề</th>
                      <th>Ảnh</th>
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
export default withRouter(AdminContentLession)