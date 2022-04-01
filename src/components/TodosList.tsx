import { useCallback, useEffect, useRef, useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import TodoRow from './TodoRow'
import { getTodos } from '../services/todosApi'
import { Todo } from '../config/types'


const TodosList = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([])
    const isCanceled = useRef(false)

    const callbackWithUnmountCheck = useCallback(
        (todos: Array<Todo>) => {
            if (isCanceled.current === false) {
                setTodos(todos)
            }
        }, [setTodos, isCanceled]
    )

    useEffect(() => {
        getTodos(callbackWithUnmountCheck)
        return () => {
            isCanceled.current = true
        }
    }, [callbackWithUnmountCheck])
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <HomeIcon sx={{ mr: 4 }}/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TODO LIST
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <List>
                {todos.map((todo) => (
                    <TodoRow key={todo.id} todo={todo} />
                ))}
            </List>
        </>  
    )
}

export default TodosList
