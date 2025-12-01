// All your routes related to todos stay here
const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");

const router = express.Router();

// GET /todos
router.get("/", getTodos);

// POST /todos
router.post("/", createTodo);

module.exports = router;
