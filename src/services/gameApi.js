// import qs from 'query-string';
import axiosService from '../commons/axiosService';
const API_ENDPOINT = 'http://localhost:5000';

const url = 'admin/game/list';

export const getList = (params = {}) => {
  let queryParams = '';
  //   if (Object.keys(params).length > 0) {
  //     queryParams = `?${qs.stringify(params)}`;
  //   }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const deletegame = (gameID) => {
  return axiosService.get(`${API_ENDPOINT}/admin/game/delete/${gameID}`)
}
export const addgame = (data) => {
  return axiosService.post(`${API_ENDPOINT}/admin/game`, data)
}
export const setgame = (data) => {
  return axiosService.get(`${API_ENDPOINT}/admin/game/${data}`);
}

export const updategame = (data) => {
  // console.log(data);
  return axiosService.post(`${API_ENDPOINT}/admin/game`, data);
};