import {
  ADD_TODO_ERROR,
  ADD_TODO_SUCCES,
  GET_TODO_SUCCES,
  GET_TODO_ERROR,
} from './actionTypes.js'

const intialState = {
  todos: {
    isloading: false,
    isError: false,
    data: [],
  },
}

export const reducer = (store = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_SUCCES:
      return {
        ...store,
        todos: {
          ...store.todos,
          isloading: false,
        },
      }
    case ADD_TODO_ERROR:
      return {
        ...store,
        todos: {
          ...store.todos,
          isloading: false,
          isError: true,
        },
      }
    case GET_TODO_SUCCES:
      return {
        ...store,
        todos: {
          ...store.todos,
          isloading: false,
          data: payload,
        },
      }
    case GET_TODO_ERROR:
      return {
        ...store,
        todos: {
          ...store.todos,
          isloading: false,
          isError: true,
        },
      }
    default:
      return { ...store }
  }
}
