const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true });

const Todo = mongoose.model("Todo", { text: String });

app.use(cors());

app.use(express.json());

app.get("/todos", async (req, res) => {
  res.send(await Todo.find());
});

app.post("/create", async (req, res) => {
  const { text } = req.body;
  const task = new Todo({ text });
  const save = await task.save();
  res.send(save);
});

app.delete("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.send(todo);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/update/:id", async (req, res) => {
  const { text } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { $set: { text } },
    { new: true }
  );
  res.send(todo);
});

app.listen(9999, () => {
  console.log("http://localhost:9999");
});
