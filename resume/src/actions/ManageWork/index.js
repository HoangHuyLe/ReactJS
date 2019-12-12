import * as types from './../../constants/ManageWork/ActionTypes';

export const fetchListTask = (params = {}) => {
      return {
            type: types.FETCH_TASK,
            payload: {
                  params
            }
      }
}

export const fetchListTaskSuccess = data => {
      return {
            type: types.FETCH_TASK_SUCCESS,
            payload:{
                  data
            }
      }
}

export const fetchListTaskFailed = error =>{
      return {
            type: types.FETCH_TASK_FAILED,
            payload: {
                  error
            }
      }
}

export const saveTask = (task) => {
      return {
            type : types.SAVE_TASK,
            task // task : task
      }
}

export const saveTaskSuccess = (task) => {
      return {
            type : types.SAVE_TASK_SUCCESS,
            task // task : task
      }
}

export const saveTaskFailed = (error) => {
      return {
            type : types.SAVE_TASK,
            error // task : task
      }
}

export const deleteTask = (id)=>{
      return{
            type : types.DELETE_TASK,
            id : id
      }
}

export const deleteTaskSuccess = (id)=>{
      return{
            type : types.DELETE_TASK_SUCCESS,
            id : id
      }
}

export const deleteTaskFailed = (error)=>{
      return{
            type : types.DELETE_TASK_FAILED,
            error
      }
}

export const updateStatus = (task)=>{
      return{
            type : types.UPDATE_STATUS_TASK,
            task
      }
}

export const updateStatusSuccess = (id)=>{
      return{
            type : types.UPDATE_STATUS_TASK_SUCCESS,
            id : id
      }
}

export const updateStatusFailed = (error)=>{
      return{
            type : types.UPDATE_STATUS_TASK_FAILED,
            error
      }
}

export const editTask = (task)=>{
      return{
            type : types.EDIT_TASK,
            task : task
      }
}

export const listAll = () => {
      return {
            type : types.LIST_ALL
      }
}

export const toggleForm = () =>{
      return {
            type: types.TOGGLE_FORM
      }
}

export const closeForm = () =>{
      return {
            type: types.CLOSE_FORM
      }
}

export const openForm = () =>{
      return {
            type: types.OPEN_FORM

      }
}

export const filterTask = (filter) =>{
      return {
            type : types.FILTER_TABLE,
            filter : filter// filter : filterName + filterStatus
      }
}

export const searchTask = (keyword) =>{
      return {
            type : types.SEARCH_TASK,
            keyword// filter : filterName + filterStatus
      }
}

export const showList = (value) =>{
      return {
            type : types.SHOW_LIST,
            value // value: true or false         
      }
}

export const sortTask = (sort) =>{
      return {
            type : types.SORT,
            sort // sort = sort.by + sort.value        
      }
}

