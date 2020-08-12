// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'https://cititechnodejs.herokuapp.com';

const url = 'admin/videolearning/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deletevideoLearning = (videoLearningID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/videolearning/delete/${videoLearningID}`)
}
export const addvideoLearning = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/videolearning`, data)
}
export const setvideoLearning = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/videolearning/${data}`);
}

export const updatevideoLearning = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/videolearning`, data);
};