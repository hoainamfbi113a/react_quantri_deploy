// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'http://localhost:5000';

const url = 'admin/lession/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deletelession = (lessionID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/lession/delete/${lessionID}`)
}
export const addlession = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/lession`, data)
}
export const setlession = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/lession/${data}`);
}
export const updatelession = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/lession`, data);
};