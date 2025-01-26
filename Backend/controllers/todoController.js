const Todo = require('../models/Todo');

// Controller for adding a task
const addTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const todo = new Todo({
      title: title,
      completed: completed || false,
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo); // Send the saved task as a response
  } catch (error) {
    res.status(500).json({ message: 'Error adding todo', error });
  }
};

// Controller for getting all tasks
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};

// Controller for deleting a task
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    await Todo.findByIdAndDelete(todoId);
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error });
  }
};

module.exports = { addTodo, getTodos, deleteTodo };
