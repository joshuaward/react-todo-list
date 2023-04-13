import { useState } from 'react';
import useTodosContext from '../hooks/useTodosContext';

import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

function TodoListItem({ todo }) {
	const [isDeleting, setIsDeleting] = useState(false);
	const { deleteTodoById } = useTodosContext();

	const handleTodoDelete = () => {
		setIsDeleting(true);
		setTimeout(() => {
			deleteTodoById(todo.id);
			setIsDeleting(false);
		}, 4000);
	}

	return(
		<div className="todos__list-item">
			<button
				className="todos__list-item-delete"
				onClick={handleTodoDelete}
				disabled={isDeleting}
			>
				{isDeleting ? <FaRegCheckCircle /> : <FaRegCircle />}
			</button>
			<span>{todo.text}</span>
		</div>
	)
}

export default TodoListItem;