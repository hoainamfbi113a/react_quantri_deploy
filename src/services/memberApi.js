// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'admin/member/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deletemember = (memberID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/member/delete/${memberID}`)
}
export const addmember = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/member`, data)
}
export const setmember = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/member/${data}`);
}

export const updatemember = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/member`, data);
};