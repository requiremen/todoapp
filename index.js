const express = require("express");
const { createtodo, updatetodo } = require("./types");
const app = express();
const port = 3000;
const {todo} = require("./db");
const { create } = require("node:domain");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).send({
            msg : "you sent the worng inputs"
        })
        return;
    

    }await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false

    })
    res.json({
        msg: "todo created succesfully"
    })



})
app.get("/todos", async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos:todos

    })
     

})
app.put("/completed",  async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);
     if(!parsedPayload.success){
        res.status(411).send({
            msg : "you sent the worng inputs"
        })
        return;
     }
     await todo.update({
        _id : req.body.id
     },{
        completed : true
     })
     res.json({
        msg : "todo marked is completed"
     })
    


})
app.listen(3000, function(){
    console.log("server is listinig on port 3000")
});

