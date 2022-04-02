// Comments:
// - Original component <Todo> split into two <TodosList> and <TodoRow>
// - Added basic styling with MUI
// - Added React.memo for component to prevent re-rendering
// - Added routing on detail page with useNavigate from React Router

import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'

import { Todo } from '../types/types'


const TodoRow = ({ todo }: { todo: Todo}): JSX.Element => {
	const navigate = useNavigate()

	const handleOnClick = (): void => navigate(`/detail/${todo.id}`)

	return (
		<ListItem disablePadding onClick={handleOnClick}>
			<ListItemButton>
				<ListItemIcon>
					<TextSnippetIcon />
				</ListItemIcon>
				<ListItemText 
					primary={todo?.title} 
					secondary={`${todo?.description.substring(0,70)} ...`}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default memo(TodoRow)

// Original content Todo.tsx from task assignment
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