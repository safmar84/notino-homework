import { memo } from 'react'

const TodoRow = (props: any) => {

	const handleOnClick = () => {
		window.location.href = '/detail'
	}

	return (
		<div>
			<div onClick={handleOnClick}>
				{props.todo.title}
			</div>
		</div>
	)
}

export default memo(TodoRow)
