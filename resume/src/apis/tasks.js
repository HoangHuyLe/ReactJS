import qs from 'query-string';
import axiosService from './axiosService';
import {API_ENDPOINT} from '../constants/index'

const url = 'tasks'

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks METHOD: GET
export const getListTask = (params = {}) => {
      let queryParams = '';
      if (Object.keys(params).length > 0) {
            queryParams = `?${qs.stringify(params)}`;
      }
      return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks METHOD: POST
export const addTask = data => {
      return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks/:id METHOD: DELETE
export const deleteTask = taskId => {
      return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};

// http://5dee0f0bb3d17b00146a2109.mockapi.io/api/tasks/:id METHOD: PUT
export const updateTask = (taskId, data) => {
      return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};