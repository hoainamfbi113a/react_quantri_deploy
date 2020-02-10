import React, { Component } from 'react'
import { withRouter  } from 'react-router'
 class AdminHeader extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
    // hashHistory.push('/')
  }
    render() {
      // var this = this;
        return (
            
                 <header className="main-header">
        {/* Logo */}
        <a href="../../index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>A</b>LT</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
       
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a href="fake_url" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <a style={{position: 'absolute', marginLeft: '86%', paddingTop: '14px',color:'#fff'}} href="" onClick={this.logOut.bind(this)} className="nav-link"><i className="fa fa-fw fa-home" />
            ĐĂNG XUẤT
          </a>
        </nav>
      </header>
           
        )
    }
}
export default withRouter(AdminHeader);
