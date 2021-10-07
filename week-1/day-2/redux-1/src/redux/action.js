import {
  ADD_COUNT,
  REDUCE_COUNT,
  ADD_TODO,
  MULTIPLY,
  DEVIDE,
} from './actionTypes.js'

export const addCount = (data) => {
  return { type: ADD_COUNT, payload: +data }
}
export const reduceCount = (data) => {
  return { type: REDUCE_COUNT, payload: +data }
}

export const multiplyCount = (data) => {
  return { type: MULTIPLY, payload: +data }
}

export const devideCount = (data) => {
  return { type: DEVIDE, payload: +data }
}

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  }
}
