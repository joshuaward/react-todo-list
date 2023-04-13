import { useState } from 'react';
import useTodosContext from '../hooks/useTodosContext';

import { FaPlus } from "react-icons/fa";


function TodoCreate() {
	const [ text, setText] = useState('');
	const { createTodo } = useTodosContext();
	const disabled = text.length < 4 ? true : false;

	const handleChange = (event) => {
		setText(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		createTodo(text);
		setText('');
	}

	return(
		<div className="todos__create">
			<form className="todos__create-form" onSubmit={handleSubmit}>
				<label className="is-sr-only">Text</label>
				<input
					value={text}
					onChange={handleChange}
					placeholder="Add something to do..."
				/>
				<button disabled={disabled}>
					<FaPlus />
					<span className="is-sr-only">Add Todo</span>
				</button>
			</form>
		</div>
	)
}

export default TodoCreate;