// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'admin/classsubject/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deleteclassSubject = (classSubjectID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/classsubject/delete/${classSubjectID}`)
}
export const addclassSubject = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/classsubject`, data)
}
export const setclassSubject = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/classsubject/${data}`);
}

export const updateclassSubject = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/classsubject`, data);
};