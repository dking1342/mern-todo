import express from 'express';
import Todo from './../models/TodoModel.js';
import cors from 'cors';

const TodoRouter = express.Router();

// route    GET /
// des      Retrieves all todos from db
// access   Public
TodoRouter.get('/', cors(), async (req,res)=>{
    try {
        const todos = await Todo.find({})
        res.status(200).json({success:true, count: todos.length, payload: todos})        
    } catch (error) {
        res.status(400).json({success:false, payload:error.message})        
    }
})

// route    GET /find/:id
// des      Retrieves unique todos from db
// access   Public
TodoRouter.get('/find/:id', cors(), async(req,res)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json({success:true, payload:todo})

    } catch (error) {
        res.status(400).json({success:false, payload: error.messaage})
    }
})

// route    POST /add
// des      Creates a new todos and inserts into the db
// access   Public
TodoRouter.post('/add', cors(), async(req,res)=>{
    try {
        const newTodo = req.body.post;
        const createdTodo = await Todo.create({todo: newTodo, isCompleted: false});
        res.status(201).json({success:true, payload: createdTodo})
    } catch (error) {
        res.status(400).json({success:false, payload: error.message})
    }    
})

// route    PUT /update/:id
// des      Updates a record in the db
// access   Public
TodoRouter.put('/update/:id', cors(), async(req,res)=>{
    try {
        const todo = req.params.id;
        const todoObj = req.body.status;
        const updatedTodo = await Todo.findOneAndUpdate({_id:todo},{isCompleted:todoObj},{new:true,useFindAndModify:false});
        res.status(200).json({success:true, payload: updatedTodo})
    } catch (error) {
        res.status(400).json({success:false,payload:error.message})
    }
})

// route    DELETE /delete/:id
// des      Deletes a record in the db
// access   Public
TodoRouter.delete('/delete/:id', cors(), async(req,res)=>{
    try {
        const todo = req.params.id;
        const deletedTodo = await Todo.deleteOne({_id:todo});
        res.status(200).json({success:true,payload:deletedTodo});
    } catch (error) {
        res.status(404).json({success:false, payload:error.message})
    }
})

// route    DELETE /delete
// des      Deletes all records in the db
// access   Public
TodoRouter.delete('/delete', cors(), async(req,res)=>{
    try {
        const deleteAllTodos = await Todo.deleteMany({});
        res.status(200).json({success:true,payload:deleteAllTodos});
    } catch (error) {
        res.status(400).json({success:false,payload:error.payload})
    }
})


export default TodoRouter;