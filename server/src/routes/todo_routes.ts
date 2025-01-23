import express, { Request, Response } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todo_controller";
import { validator } from "../utils/inputValidate";

const todoRouter = express.Router();

todoRouter.post('/', validator, createTodo);

todoRouter.get('/', getTodos);

todoRouter.put('/:id', validator, updateTodo);

todoRouter.delete('/:id', deleteTodo);


export default todoRouter;