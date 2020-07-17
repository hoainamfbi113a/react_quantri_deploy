// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'http://localhost:5000';

const url = 'admin/exam/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deleteexam = (examID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/exam/delete/${examID}`)
}
export const addexam = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/exam`, data)
}
export const setexam = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/exam/${data}`);
}

export const updateexam = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/exam`, data);
};