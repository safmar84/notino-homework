import { useEffect, useState } from 'react'
import TodoRow from './TodoRow'
import { getTodos } from '../services/todosApi'
import { Todo } from '../config/types'

const TodosList = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([])
    
    useEffect(() => {
        (async () => {
            let awaitedTodos = await getTodos()
            setTodos(awaitedTodos)
        })()
    }, [])
    
    return (
        <>
            {todos.map((todo) => (
                <TodoRow key={todo.id} todo={todo} />
            ))}
        </>
       
    )
}

export default TodosList
