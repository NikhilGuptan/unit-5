import { createStore } from 'redux'

import { reducer } from './reducer.js'

const intialState = {
  counter: 0,
  todos: [],
}

export const store = createStore(reducer, intialState)

// store.dispatch(addCount(1))
// store.dispatch(reduceCount(2))

// store.dispatch(addTodo({ id: 1, status: false, title: 'React Learn' }))

// // console.log(store.getState())
