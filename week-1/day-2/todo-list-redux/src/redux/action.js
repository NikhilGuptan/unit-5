import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes.js'

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}
