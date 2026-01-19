const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://231220006_db_user:0wwdedIYobR3LHeq@cluster0.t0f6t7g.mongodb.net/todoapp");
const todoschema = new mongoose.Schema({
    title : string,
    description : string,
    completed : boolean
})
const todo = mongoose.model("todos",todoschema);
module.exports={
    todo : todo
}