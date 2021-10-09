import {
  ADD_TODO_ERROR,
  ADD_TODO_SUCCES,
  GET_TODO_ERROR,
  GET_TODO_SUCCES,
} from './actionTypes.js'

export const addTodoSucces = (data) => {
  return {
    type: ADD_TODO_SUCCES,
    payload: data,
  }
}
export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  }
}

export const getTodoSucces = (data) => {
  return {
    type: GET_TODO_SUCCES,
    payload: data,
  }
}
export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  }
}
