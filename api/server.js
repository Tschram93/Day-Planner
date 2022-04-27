const cors = require('cors');
const DayPlanner = require('./models/dayPlanner');
const db = require('./config/connection');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use cors to prevent any cross-origin errors
app.use(cors());


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Get request
app.get('/todos', async (req, res) => {
	const todos = await DayPlanner.find();

	res.json(todos);
});

// POST request
app.post('/todo/new', (req, res) => {
	const todo = new DayPlanner({
		text: req.body.text,
	});
	todo.save();

	res.json(todo);
});

// Delete Request
app.delete('/todo/delete/:id', async (req, res) => {
	const result = await DayPlanner.findByIdAndDelete(req.params.id);

	res.json(result);
});

// PUT
app.get('/todo/complete/:id', async (req, res) => {
	const todo = await DayPlanner.findById(req.params.id);

	todo.complete = !todo.complete;
	todo.save();

	res.json(todo);
});

db.once('open', () => {
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}!`)
    });
});
