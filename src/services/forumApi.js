// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'client/forumquestion/list';

export const getList = (params = {}) => {
  let queryParams = '';
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deleteforum = (forumID) => {
  return axiosService.get(`${API_ENDPOINT}/client/forumquestion/delete/${forumID}`)
}
export const addforum = (data) => {
  return axiosService.post(`${API_ENDPOINT}/client/forumquestion`, data)
}
export const setforum = (data) => {
  return axiosService.get(`${API_ENDPOINT}/client/forumquestion/${data}`);
}

export const updateforum = (data) => {
  return axiosService.post(`${API_ENDPOINT}/client/forumquestion`, data);
};