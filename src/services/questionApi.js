// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'admin/question/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deletequestion = (questionID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/question/delete/${questionID}`)
}
export const addquestion = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/question`, data)
}
export const setquestion = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/question/${data}`);
}

export const updatequestion = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/question`, data);
};