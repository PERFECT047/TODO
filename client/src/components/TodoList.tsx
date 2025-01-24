import { useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todo/todoSlice";
import { Todo } from "../models/models";
import { RootState } from "../store/store";

const TodoList: React.FC<{ type: string }> = ({ type }) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}${type === "all" ? "" : "completed"}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const todosData = response.data.data;

                console.log("Fetched todos:", todosData);

                dispatch(clearTodos([]));

                todosData.forEach((todo: Todo) => {
                    console.log("Processing todo:", todo);
                    dispatch(addTodo(todo));
                });

            } catch (err) {
                console.error("Error fetching todos:", err);
            }
        };

        fetchTodos();
    }, [type]);

    return (
        <div>
            {todos.map((todo: Todo) => (
                <TodoItem key={todo._id} {...todo} />
            ))}
        </div>
    );
};

export default TodoList;