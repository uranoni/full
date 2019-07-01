const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});

const Todo = mongoose.model('Todo', { text: String });
const task = new Todo({text: 'go to die' });



app.get('/create', function(req, res) {
    task.save().then(() => console.log('meow'));
});

app.listen(9999, () => {
    console.log('http://localhost:9999')
})