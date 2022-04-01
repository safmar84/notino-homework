import { Todo } from '../config/types'

export const getTodos = async (callback: (todos: Array<Todo>) => void) => {
  try { 
    const data = await fetch('http://localhost:3001/todos')
    const awaitedTodos = await data.json()
    callback(awaitedTodos)
  } catch (error) {
      console.log('Fetching of TODOs failed. ', error)
  }
}

export const getTodo = async (id: (string | undefined), callback: (todo: Todo) => void) => {
  try {
    const data = await fetch(`http://localhost:3001/todos?id=${id}`)
    const [awaitedTodo] = await data.json()
    callback(awaitedTodo)
  } catch (error) {
      console.log(`Fetching of TODO number ${id} failed. `, error)
  }
}
