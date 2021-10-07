import {
  ADD_COUNT,
  REDUCE_COUNT,
  ADD_TODO,
  MULTIPLY,
  DEVIDE,
} from './actionTypes.js'

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return {
        ...store,
        counter: store.counter + payload,
      }
    case REDUCE_COUNT:
      return {
        ...store,
        counter: store.counter - payload,
      }
    case MULTIPLY:
      return {
        ...store,
        counter: store.counter * payload,
      }
    case DEVIDE:
      return {
        ...store,
        counter: store.counter / payload,
      }
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, { ...payload }],
      }
    default:
      return { ...store }
  }
}
