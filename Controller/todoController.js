const Todo = require("../Model/todo")

exports.getTodo = async (req, res) => {
    try {
        const data = await Todo.find()
        return res.json({ error: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.addTodo = async (req, res) => {
    try {
        const data = await Todo.create(req.body)
        return res.json({ error: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({ error: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteTodo = async(req,res) =>{
    try {
      const data = await Todo.findByIdAndDelete(req.params.id)
      return res.json({error:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true, message:error.message})
    }
  }

