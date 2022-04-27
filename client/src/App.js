import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
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
