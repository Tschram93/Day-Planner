const cors = require('cors');
const DayPlanner = require('./models/dayPlanner');
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3001;

const app =  express();

app.use(express.json());
// use cors to prevent any cross-origin errors
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/day-planner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DataBase'))
    .catch(console.error);

    // Get request
app.get('/todos', async (req, res) => {
    const todos = await DayPlanner.find();

    res.json(todos);
});

    // POST request
app.post('/todo/new', (req, res) => {
    const todo = new DayPlanner({
        text: req.body.text
    });
    todo.save()

    res.json(todo);
});

    // Delete Request
app.delete('/todo/delete/:id', async (req, res) => {
    const result = await DayPlanner.findByIdAndDelete(req.params.id);

    res.json(result);
})

    // PUT
app.put('/todo/complete/:id', async (req, res) => {
    const todo = await DayPlanner.findById(req.params.id);

    todo.complete = !todo.complete;
    todo.save();

    res.json(todo);
})

app.listen(PORT, () => console.log('Server running on port: 3001'));
