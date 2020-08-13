// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';


const url = 'admin/exam/list';

export const getList = (params = {}) => {
  let queryParams = '';
  // alert("service");
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deleteexam = (examID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/exam/delete/${examID}`)
}
export const addexam = (data) => {
  if(data.examCategoryNumber){
    // alert("xin chao");
    return axiosService.post(`${API_ENDPOINT}/admin/exam`, data)
  } else{
    return axiosService.post(`${API_ENDPOINT}/admin/exam/excel`, data)
  }
    
}
export const setexam = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/exam/${data}`);
}

export const updateexam = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/exam`, data);
};