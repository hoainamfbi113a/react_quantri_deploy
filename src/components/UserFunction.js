import axios from 'axios'
// export const register = newUser => {
//   return axios
//     .post('users/register', {
//       first_name: newUser.first_name,
//       last_name: newUser.last_name,
//       memberLogin: newUser.memberLogin,
//       memberPass: newUser.password
//     })
//     .then(response => {
//       console.log('Registered')
//     })
// }

export const login = user => {////var login = function(user){    }// nguyn
//alert(user.memberLogin);
return axios
    .post('https://cititechnodejs.herokuapp.com/users/loginadmin', {
      memberLogin: user.memberLogin,
      memberPass: user.memberPass,
      memberCategory: user.memberCategory
    })
    .then(response => {
      // console.log(response.data);
      if(response.data.error ==='User does not exist'||response.data==='User not exists')
        alert('Tai khoan hoac mat khau khong chinh xac');
      else{
      localStorage.setItem('usertoken', response.data)//server truyen token qua Luu vao day de goi ham logout
      return response.data//trả về de ham onsubmit login xử lý
      localStorage.clear();
      }
    })
    .catch(err => {
      console.log(err)
    })
}
