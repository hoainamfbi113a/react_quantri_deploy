import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import AdminHeader from '../header/AdminHeader';
import AdminMenu from '../menu/AdminMenu';
import AdminFooter from '../footer/AdminFooter';
//import AdminContent from './components/admin/content/AdminContent'
// import AdminEditItem from './components/admin/content/adminEdit_Item/AdminEditItem'
import RouterURL from '../routerURL/RouterURL'
export default class AdminHome extends Component {
    render() {
        return (
           
            <div className="wrapper" >
                  <AdminHeader/>
                  <AdminMenu/>
                  <div className="content-wrapper" style={{minHeight: '916px'}}>
                  <RouterURL/>
                  </div>
                  <AdminFooter/>
            </div>
    
        )
    }
}
