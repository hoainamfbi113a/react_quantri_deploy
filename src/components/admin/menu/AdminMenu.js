import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import "./style.css"
export default class AdminMenu extends Component {
    render() {
        return (
            
        <aside className="main-sidebar">
       
        <section className="sidebar">
        
          <ul className="sidebar-menu">
            <li className="treeview" >
              <Link to="/admin/classsubject">
                  <i className="fa fa-dashboard" /> <span>Quản lý lớp học</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                  </Link>
              
              </li>
            <li className="treeview" >
            <Link to="/admin/member">
                <i className="fa fa-dashboard" /> <span>Quản lý học sinh</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
                </Link>
             
            </li>
          
            
           
            <li className="treeview">
            <Link to="/admin/question">
                <i className="fa fa-pie-chart" />
                <span>Quản lý câu hỏi</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
             
            </li>

            <li className="treeview">
            <Link to="/admin/exam">
                <i className="fa fa-edit" /> <span>Quản lý đề thi</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
             </Link>
              
            </li>

            <li className="treeview">
            <Link to="/admin/news">
                <i className="fa fa-edit" /> <span>Quản lý tin tức</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
             </Link>
              
            </li>
            <li className="treeview">
            <Link to="/admin/lession">
                <i className="fa fa-edit" /> <span>Quản lý nội dung bài học</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
             </Link>
             </li>
             <li>
            <Link to="/admin/videolearning">
                <i className="fa fa-edit" /> <span>Quản lý video bài học</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
             </Link>
              </li>
             <li>
             <Link to="/admin/forum">
                <i className="fa fa-edit" /> <span>Quản lý câu hỏi forum</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
           
              </li>
              <li>
                <Link to="/admin/game">
                  <i className="fa fa-edit" /> <span>Quản lý câu hỏi trò chơi</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
              </li>
            <li> <Link to="/admin/result"><i className="fa fa-book" /> <span>Kết quả thi</span></Link></li>
          </ul>
        </section>
      </aside>

        )
    }
}
