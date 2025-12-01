// main file
const express = require("express");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Mongoose Todo API is running 🚀");
});

// Todo routes
app.use("/todos", todoRoutes);

// Connect DB, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
