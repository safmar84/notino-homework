// Comments:
// - New component for TODO detail
// - Added basic styling with MUI
// - Fetched TODO get from Context API with useContext hook and useParams from React Router
// - Added routing back on TODOs list with useNavigate from React Router

import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { TodosContext } from '../App'
import { Todo } from '../types/types'


const TodoDetail = (): JSX.Element => {
    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()
    const todos: Todo[] | null = useContext(TodosContext)
    const todo: Todo | null | undefined = todos && todos.find(todo => String(todo.id) === id)
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {todo?.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <TextSnippetIcon />
                    </ListItemIcon>
				    <ListItemText 
                        primary={todo?.description} 
                        secondary={`(id: ${todo?.id})`}
                    />
		        </ListItem>
            </List>    
        </>
    )
}

export default TodoDetail
