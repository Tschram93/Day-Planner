import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001';

function App() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState('');

	useEffect(() => {
		GetTodos();

		console.log(todos);
	}, []);

	const completeToDo = async (id) => {
		const data = await fetch(API_BASE + `/todo/complete/` + id).then((res) =>
			res.json()
		);
		setTodos((todos) =>
			todos.map((todo) => {
				if (todo._id === data._id) {
					todo.complete = data.complete;
				}
				return todo;
			})
		);
	};

	const deleteTodo = async (id) => {
		const data = await fetch(API_BASE + `/todo/delete/` + id, {
			method: 'DELETE',
		}).then((res) => res.json());
		setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
	};

	const GetTodos = () => {
		fetch(API_BASE + '/todos')
			.then((res) => res.json())
			.then((data) => setTodos(data))
			.catch((err) => console.log(err));
	};

	let name = 'Travis';
	return (
		<div className='App'>
			<h1>Welcome, {name}</h1>
			<h4>Your Tasks</h4>
			<div className='tasks'>
				{todos.map((todo) => (
					<div
						className={'task ' + (todo.complete ? 'is-complete' : '')}
						key={todo._id}
						onClick={() => completeToDo(todo._id)}
					>
						<div className='checkbox'></div>
						<div className='text'>{todo.text}</div>
						<div className='delete-task' onClick={() => deleteTodo(todo._id)}>
							X
						</div>
					</div>
				))}
			</div>
			<div className='addPopup' onClick={() => setPopupActive(true)}>
				+
			</div>
			{popupActive ? (
				<div className='popup'>
					<div className='closePopup' onClick={() => setPopupActive(false)}>
						X
					</div>
					<div className='content'>
						<h3>Add Task</h3>
						<input
							className='add-task-input'
							onChange={(e) => setNewTodo(e.target.value)}
							type='text'
							value={newTodo}
						/>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default App;
