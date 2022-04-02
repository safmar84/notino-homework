import { Todo } from '../types/types'

export const getTodos = async (callback: (todos: Array<Todo>) => void) => {
  try { 
    const data = await fetch('http://localhost:3001/todos')
    const awaitedTodos = await data.json()
    callback(awaitedTodos)
  } catch (error) {
      console.log('Fetching of TODOs failed. ', error)
  }
}
