import { memo } from 'react'
import { Todo } from '../config/types'

const TodoRow = ({ todo }: { todo: Todo}): JSX.Element => {

	const handleOnClick = (): void => {
		window.location.href = `/detail/${todo?.id}`
	}

	return (
		<div onClick={handleOnClick}>
			{todo?.title}
		</div>
	)
}

export default memo(TodoRow)
