import { useState } from "react";
import TodoList from "./TodoList";

function App() {
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

	const handleInputChange = (e) => {
		setTodoInput(e.target.value);
	};

	const handleAddTodo = () => {
		setTodos([...todos, todoInput]);
		setTodoInput("");
	};

	const handleDeleteTodo = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div>
			<h1>Lista de Tareas</h1>
			<input type="text" value={todoInput} onChange={handleInputChange} />
			<button onClick={handleAddTodo}>Agregar Tarea</button>
			<TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
		</div>
	);
}

export default App;
