// Comments:
// - Original component <Todo> split into two <TodosList> and <TodoRow>
// - Fetched TODOs get from Context API with useContext hook
// - Added basic styling with MUI
// - Added key property for <TodoRow> components rendering

import { useContext  } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import TodoRow from './TodoRow'
import { TodosContext } from '../App'

const TodosList = (): JSX.Element => {
    const todos = useContext(TodosContext)

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
                {todos?.map((todo) => (
                    <TodoRow key={todo.id} todo={todo} />
                ))}
            </List>
        </>  
    )
}

export default TodosList

// Original content Todo.tsx from task assignment (https://gist.github.com/remunda/485e76c63c638b765a399810222c3415)
/* import React from "react";

class Todo extends React.Component<any> {
	shouldComponentUpdate(prevProps: any) {
	if(this.props != prevProps) {
		return true;
	}
		return false;
	}

	handleOnClick() {
		window.location.href = '/detail'
	}

	render() {

	return (
		<div>
			<div onClick={this.handleOnClick}>
			{this.props.todo.title}
			</div>
		</div>
	);
	}
}

export default Todo; */