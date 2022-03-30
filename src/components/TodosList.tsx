import { useEffect, useState } from 'react';
import TodoRow from './TodoRow'
import { getTodos } from '../services/todosApi'

const TodosList = () => {
    const [todos, setTodos] = useState<{ id: string; title: string }[]>([])
    
    useEffect(() => {
        (async () => {
            let awaitedTodos = await getTodos()
            console.log("Awaited Data: ", awaitedTodos)
            setTodos(awaitedTodos)
        })()
    }, [])
    
    return (
        <>
            {todos.map((todo) => (
                <TodoRow todo={todo} />
            ))}
        </>
       
    )
}

export default TodosList