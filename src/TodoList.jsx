function TodoList({ items, onDeleteTodo }) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={item}>
					{item}
					<button onClick={() => onDeleteTodo(index)}>🗑️</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
