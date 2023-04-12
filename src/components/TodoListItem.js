import useTodosContext from '../hooks/useTodosContext';

import { FaTimesCircle } from "react-icons/fa";

function TodoListItem({ todo }) {
	const { deleteTodoById } = useTodosContext();

	const handleTodoDelete = () => {
		deleteTodoById(todo.id);
	}

	return(
		<div className="todo__list-item">
			<span>{todo.text}</span>
			<button onClick={handleTodoDelete}>
				<FaTimesCircle />
			</button>
		</div>
	)
}

export default TodoListItem;