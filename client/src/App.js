import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001';

function App() {
  const [tasks, setTasks] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    GetTasks();
  }, [])

  const GetTasks = () => {
    fetch(API_BASE + '/todos')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }

	let name = 'Travis';
	return (
		<div className='App'>
			<h1>Welcome, {name}</h1>
			<h4>Your Tasks</h4>
			<div className='tasks'>
				<div className='task'>
					<div className='checkbox'></div>
					<div className='text'>Make Breakfast</div>
          <div className="delete-task">X</div>
				</div>
        <div className="task is-complete">
          <div className="checkbox"></div>
          <div className="text">Get the eggs</div>
          <div className="delete-task">X</div>
        </div>
			</div>
		</div>
	);
}

export default App;
