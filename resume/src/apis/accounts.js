// import qs from 'query-string';
import axiosService from './axiosService';
import {API_ENDPOINT} from '../constants/index'

const url = 'accounts'

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/accounts METHOD: GET
export const getAccount = (params = {}) => {
      let queryParams = '';
      if (Object.keys(params).length > 0) {
            queryParams = `?search=${params.username}`;
      }      
      return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks METHOD: POST
export const addAccount = data => {
      return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks/:id METHOD: DELETE
export const deleteAccount = taskId => {
      return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks/:id METHOD: PUT
export const updateAccount = (taskId, data) => {
      return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};