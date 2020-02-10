import React,{Component} from 'react';
import {Link,Redirect}  from 'react-router-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdminHeader from './components/admin/header/AdminHeader';
import AdminMenu from './components/admin/menu/AdminMenu';
import AdminFooter from './components/admin/footer/AdminFooter';
//import AdminContent from './components/admin/content/AdminContent'
import AdminEditItem from './components/admin/content/adminEdit_Item/AdminEditItem'
import AdminHome from './components/admin/adminHome/AdminHome'
import Login from './components/Login'
// import Login from './components/Login'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     localStorage.usertoken
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default class componentName extends Component {
  render() {
    return (
      <Router>
      {/* <RouterURLNode/> */}
      <Route exact path="/" component={Login} />
      {/* <Route   path="/admin" component={AdminHome} /> */}
      <PrivateRoute   path="/admin" component={AdminHome} />
      {/* <PrivateRoute path='/protected' component={Protected} /> */}
      </Router>
    )
  }
}

