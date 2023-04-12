import { createContext, useState } from "react";
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		const response = await axios.get('http://localhost:3001/todos');
		setTodos(response.data);
	}

	const deleteTodoById = async (id) => {
		await axios.delete(`http://localhost:3001/todos/${id}`);

		const updatedTodos = todos.filter((todo) => {
			return todo.id !== id;
		});

		setTodos(updatedTodos);
	}

	const createTodo = async (text) => {
		const response = await axios.post('http://localhost:3001/todos', {
			text
		});

		const updatedTodos = [...todos, response.data];
		setTodos(updatedTodos);
	}
	
	console.log(todos);

	const values = {
		todos,
		fetchTodos,
		deleteTodoById,
		createTodo
	}

	return(
		<TodosContext.Provider value={values}>
			{ children }
		</TodosContext.Provider>
	)
}

export { Provider };
export default TodosContext;