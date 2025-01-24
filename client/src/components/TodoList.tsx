import { useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todo/todoSlice";
import { Todo, TodoListProps } from "../models/models";
import { RootState } from "../store/store";



const TodoList: React.FC<TodoListProps> = ({ type }) => {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

    const todos = useSelector((state: RootState) => state.todos); 
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTodos = async () => {
            if(type == "all"){
                try {
                    const response = await axios.get(`${BACKEND_URL}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                    const todosData = response.data.data;
                    
                    console.log(todosData);
    
                    dispatch(clearTodos([]));
    
                    todosData.forEach((todo: Todo) => {
                        dispatch(addTodo(todo));
                    });
    
                } catch (err) {
                    console.error("Error fetching todos:", err);
                }
            }
            else{
                try {
                    const response = await axios.get(`${BACKEND_URL}completed`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                    const todosData = response.data.data;
                    
                    console.log(todosData);
    
                    dispatch(clearTodos([]));
    
                    todosData.forEach((todo: Todo) => {
                        dispatch(addTodo(todo));
                    });
    
                } catch (err) {
                    console.error("Error fetching todos:", err);
                }
            }
        };

        fetchTodos();
    }, [dispatch, BACKEND_URL]);

    return (
        <div>
            {todos.map((todo: Todo) => (
                <TodoItem key={todo._id} title={todo.title} description={todo.description} completed={todo.completed} />
            ))}
        </div>
    );
};

export default TodoList;