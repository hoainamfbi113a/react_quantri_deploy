// import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { data } from 'jquery';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'admin/news/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deleteNew = (newID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/news/delete/${newID}`)
}
export const addNew = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/news`, data)
}
export const setNew = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/news/${data}`);
}

export const updateNew = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/news`, data);
};