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
        persons:[],
        currentPage: 1,
        newsPerPage: 7
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
    chosePage = (event) => {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
    select = (event) => {
      this.setState({
        newsPerPage: event.target.value
      })
    }
    render() {
      let { persons } = this.state;
      const currentPage = this.state.currentPage;
      const newsPerPage = this.state.newsPerPage;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = persons.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return <Item stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(persons.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
        return (     
          <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                <div className="news-per-page" style={{marginTop: '10px'}}>
                    <select defaultValue="0" onChange={this.select} >
                      <option value="0" disabled>Get by</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
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
                     {renderTodos}
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
                <div className="pagination-custom">
                  <ul id="page-numbers">
                    {
                      pageNumbers.map(number => {
                        if (this.state.currentPage === number) {
                          return (
                            <li key={number} id={number} className="active">
                              {number}
                            </li>
                          )
                        }
                        else {
                          return (
                            <li key={number} id={number} onClick={this.chosePage} >
                              {number}
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
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
