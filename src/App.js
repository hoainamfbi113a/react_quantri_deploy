import React,{Component} from 'react';
import {Link,Redirect}  from 'react-router-dom'
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdminHome from './components/admin/adminHome/AdminHome'
import Login from './components/Login'
import Globading from './components/globaloading/Globading';
// import Login from './components/Login'
import configStore from "./store/configstore"
const store = configStore ();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     localStorage.usertoken
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Globading/>
      <ToastContainer />
      <Router>
           <Route exact path="/" component={Login} />
           <PrivateRoute path="/admin" component={AdminHome} />
      </Router>
     
      </Provider>
    )
  }
}

