const mongoose = require ("mongoose")
const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("todo",todoSchema)