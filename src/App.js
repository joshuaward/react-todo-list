import { useContext, useEffect } from 'react';
import TodosContext from './context/index';

// components
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
	const { fetchTodos } = useContext(TodosContext);

	useEffect(() => {
		fetchTodos()
		// eslint-disable-next-line
	}, []);

  return (
    <div className="todos">
			<h2 className="todos__title">A List of Things To Do</h2>
      <TodoList />
			<TodoCreate />
    </div>
  );
}

export default App;
