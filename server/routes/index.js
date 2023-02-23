const express = require("express");
const { Todo } = require("../models/todos/todo");

const routes = (app) => {
  const router = express.Router();

  router.post("/todos", (req, res) => {
    const todo = new Todo({
      text: req.body.text,
    });

    todo
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  router.get("/", (req, res) => {
    Todo.find({}, { __v: 0 })
      .then((todos) => {
        res.send(todos);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  app.use("/api", router);
};
module.exports = routes;
