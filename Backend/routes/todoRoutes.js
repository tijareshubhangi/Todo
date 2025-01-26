const express = require('express');
const router = express.Router();
const { addTodo, getTodos, deleteTodo } = require('../controllers/todoController');

// GET all todos
router.get('/', getTodos);

// POST a new todo
router.post('/', addTodo);

// DELETE a todo by ID
router.delete('/:id', deleteTodo);

module.exports = router;
