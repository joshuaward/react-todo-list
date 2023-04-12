import TodoListItem from './TodoListItem';
import useTodosContext from '../hooks/useTodosContext';

function TodoList() {
	const { todos } = useTodosContext();

	const renderedTodos = todos.map((todo) => {
		return <TodoListItem key={todo.id} todo={todo} />
	})

	return(
		<div className="todo__list">
			<p>Todo List</p>
			<div className="todo_list-items">{renderedTodos}</div>
		</div>
	)
}

export default TodoList;