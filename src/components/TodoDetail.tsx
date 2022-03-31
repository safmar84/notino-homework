import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTodo } from '../services/todosApi'
import { Todo, UrlId } from '../config/types'

const TodoDetail = (): JSX.Element => {
    const [todo, setTodo] = useState<Todo>()
    const urlId: UrlId = useParams().id
    
    useEffect(() => {
        (async () => {
            let [awaitedTodo] = await getTodo(urlId)
            setTodo(awaitedTodo)
        })()
    }, [urlId])
    
    return (
        <>
            <div>Číslo úkolu: {todo?.id}</div>
            <div>Úkol: {todo?.title}</div>
        </>
        
    )
}

export default TodoDetail
