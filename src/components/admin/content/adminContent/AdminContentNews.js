// import React, { Component } from 'react';
// import Swal from 'sweetalert-react';
// import {Link}  from 'react-router-dom'
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import ItemNews  from '../Items/ItemNews';

class AdminContentNews extends Component {
  constructor(props){
    super(props)
    this.state={
      news:[]
    }
  }
  componentDidMount=()=>
  {
    axios.get('http://localhost:5000/news/list/')
    .then(response => {
      this.setState({news:response.data})
    })
    .catch(function(error){
      console.log(error+"loi kia");
    })
  }
  renderItem=()=>{
    let{news}=this.state;
    return(
      news.map((item,index)=>{
        return(
          <ItemNews key ={item._id} item={item} index={index}></ItemNews>
        )
      })
    )
  }
    render() {
      let {news}=this.state;
        return (     
            <div>
               <section className="content">
               <div className="row">
                 <div className="col-xs-12">
                   <div className="box">
                     <div className="box-header">
                     <Link to="news/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm tin tức</button></Link>
                     </div>
                     {/* /.box-header */}
                     <div className="box-body">
                       <table id="example2" className="table table-bordered table-hover">
                         <thead>
                           <tr>
                             <th>Tiêu đề tin tức </th>
                             <th>Hình ảnh</th>
                             <th>Nội dung tin tức</th>
                             <th>Thời gian update</th>
                             <th>Sửa tin tức</th>
                             <th>Xóa tin tức</th> 
                            
                           </tr>
                         </thead>
                         <tbody>
                          {this.renderItem() }
                         </tbody>
                         <tfoot>
                           <tr>
                           <th>Tiêu đề tin tức </th>
                             <th>Hình ảnh</th>
                             <th>Nội dung tin tức</th>
                             <th>Thời gian update</th>
                             <th>Sửa tin tức</th>
                             <th>Xóa tin tức</th> 
                           </tr>
                         </tfoot>
                       </table>
                     </div>
                    
                   </div>
                  
                 </div>
                
               </div>
               {/* { <Swal
                                 show={this.state.showAlert}
                                 title="Delete Item"
                                 text="abc"
                                 showCancelButton
                                 onOutsideClick={()  => this.setState({ showAlert: false })}
                                 onEscapeKey={()     => this.setState({ showAlert: false })}
                                 onCancel={()        => this.setState({ showAlert: false })}
                                 onConfirm={() => this.handleDeleteItem()}
                /> } */}
             </section>
            
             </div>    
               
     
             );
    }
}

export default AdminContentNews;