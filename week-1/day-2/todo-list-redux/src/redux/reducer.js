import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes.js'

const intialState = {
  todos: [
    {
      id: 1,
      title: 'React',
      status: false,
    },
  ],
}

export const reducer = (store = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, { ...payload }],
      }
    case DELETE_TODO:
      const newTodo = store.todos.filter((e) => {
        return e.id !== payload
      })
      return {
        ...store,
        todos: newTodo,
      }
      case TOGGLE_TODO:
      const toggled = store.todos.map((e) => 
        e.id === payload ? {...e,status: !e.status} : e
      )
      return {
        ...store,
        todos: toggled,
      }
    default:
      return { ...store }
  }
}
