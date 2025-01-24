import { Request, Response } from "express"
import Todo from "../models/todo_model"

const createTodo = async(req: Request, res: Response) => {

    try{
        const { title, description, completed } = req.body;
        const todo = await Todo.create({ title, description, completed });
        res.status(200);
        res.json({ data: todo, success: true });
    }
    catch(err: any){
        res.status(500);
        res.json({ data: err.message, success: false });
    }

};

const getTodos = async(req: Request, res: Response) => {

    try{
        const todos = await Todo.find();
        res.status(200);
        res.json({ data: todos, success: true });
    }
    catch(err: any){
        res.status(500);
        res.json({ data: err.message, success: false });
    }

};

const updateTodo = async(req: Request, res: Response) => {

    try{
        const { id } = req.params;
        const { title, description, completed } = req.body;
        console.log(id, title, description, completed);
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { 
                title, 
                description, 
                completed: (completed ? true : false) 
            },
            { 
                new: true 
            }
        );

        if(!updatedTodo){
            res.status(404);
            res.json({ data: "Todo not found!", success: false });
        }
        res.status(200);
        res.json({ data: updatedTodo, success: true });
    }
    catch(err: any){
        res.status(500);
        res.json({ data: err.message, success: false });
    }

};

const deleteTodo = async(req: Request, res: Response) => {

    try{
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if(!deletedTodo){
            res.status(404);
            res.json({ data: "Todo not found!", success: false });
        }
        res.status(200);
        res.json({ data: "Todo deleted!", success: true });
    }
    catch(err: any){
        res.status(500);
        res.json({ data: err.message, success: false });
    }

};

const completeTodos = async(req: Request, res: Response) => {

    try{
        const completedTodos = await Todo.find({
            completed: true
        });
        res.status(200);
        res.json({ data: completedTodos, success: true });
    }
    catch(err: any){
        res.status(500);
        res.json({ data: err.message, success: false });
    }
}

export { createTodo, getTodos, updateTodo, deleteTodo, completeTodos };