import { useState } from 'react';
import useTodosContext from '../hooks/useTodosContext';

function TodoCreate() {
	const [ text, setText] = useState('');
	const { createTodo } = useTodosContext();

	const handleChange = (event) => {
		setText(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		createTodo(text);
		setText('');
	}

	return(
		<div>
			<p>Create Todo</p>
			<form onSubmit={handleSubmit}>
				<label>Text</label>
				<input value={text} onChange={handleChange} />
				<button>Add Todo</button>
			</form>
		</div>
	)
}

export default TodoCreate;