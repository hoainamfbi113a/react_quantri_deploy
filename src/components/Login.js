import React, { Component } from 'react'
 import {login} from './UserFunction'
class Login extends Component {
  constructor() {//Ham khoi tao
    super()
    this.state = {
      memberLogin: '',
      memberPass: '',
      memberCategory:'2',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)//để nó hiểu this ở đay là login
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {//mỗi khi thay đổi giá trị input
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()//không làm refesh trang khi click

    const user = {
      memberLogin: this.state.memberLogin,
      memberPass: this.state.memberPass,
      memberCategory: this.state.memberCategory
    }
    login(user).then(res => {//gọi hàm bên userfunction
        if (res) {//tồn tại giá trị 
          this.props.history.push('/admin')
        }
      })
  }
  render() {
    return (
      <div className="parent-box">
       <style dangerouslySetInnerHTML={{__html: "\n    \n  .parent-box {\n      position: relative;\n      height: 100%;\n\t\t  display: flex;\n\t\t  align-items: center;\n\t\t  justify-content: center;\n  }\n  .box{\n    width: 380px;\n    padding: 40px;\n    \n    /* position: absolute;\n    top: 50%;\n    left: 50%; */\n    /* transform: translate(-50%,-50%); */\n    background: #345;\n    text-align: center;\n  }\n  .box h1{\n    color: white;\n    text-transform: uppercase;\n    font-weight: 500;\n  }\n  .box input[type = \"text\"],.box input[type = \"password\"]{\n    border:0;\n    background: none;\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    border: 2px solid #3498db;\n    padding: 14px 10px;\n    width: 200px;\n    outline: none;\n    color: white;\n    border-radius: 24px;\n    transition: 0.25s;\n  }\n  .box input[type = \"text\"]:focus,.box input[type = \"password\"]:focus{\n    width: 280px;\n    border-color: #2ecc71;\n  }\n  .box input[type = \"submit\"]{\n    border:0;\n    background: none;\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    border: 2px solid #2ecc71;\n    padding: 14px 40px;\n    outline: none;\n    color: white;\n    border-radius: 24px;\n    transition: 0.25s;\n    cursor: pointer;\n  }\n  .box input[type = \"submit\"]:hover{\n    background: #2ecc71;\n  }\n  \n    " }} />
       <form className="box" noValidate onSubmit={this.onSubmit}>
        <div>
          <h1>Login</h1>
          <input  type="text"   
                  name="memberLogin"
                  placeholder="Username"
                  value={this.state.memberLogin}
                  onChange={this.onChange} />
          <input  type="password"
                  name="memberPass"
                  placeholder="Password"
                  value={this.state.memberPass}
                  onChange={this.onChange} />
          <input type="submit" name="" value="Login"/>
          </div>
      </form>
      </div>
    )
  }
}

export default Login
