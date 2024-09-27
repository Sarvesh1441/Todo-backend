const{getTodo,addTodo,updateTodo,deleteTodo} = require("../Controller/todoController")
const route = require("express").Router()

route.get("/",getTodo)
route.post("/",addTodo)
route.put("/:id",updateTodo)
route.delete("/:id",deleteTodo)

module.exports = route
