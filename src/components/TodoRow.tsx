import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'

import { Todo } from '../config/types'


const TodoRow = ({ todo }: { todo: Todo}): JSX.Element => {
	const navigate = useNavigate()

	const handleOnClick = (): void => navigate(`/detail/${todo?.id}`)

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
