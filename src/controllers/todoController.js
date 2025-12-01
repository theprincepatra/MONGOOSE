// This keeps logic
const Todo = require("../models/Todo");

// GET /todos → list all todos
async function getTodos(req, res) {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ message: "Server error while fetching todos" });
  }
}

// POST /todos → create a todo
async function createTodo(req, res) {
  try {
    const { title, desc } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = new Todo({
      title,
      desc
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ message: "Server error while creating todo" });
  }
}

module.exports = {
  getTodos,
  createTodo
};
