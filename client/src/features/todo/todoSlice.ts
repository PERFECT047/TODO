import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/models";

interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                _id: action.payload.data._id,
                title: action.payload.data.title,
                description: action.payload.data.description,
                completed: action.payload.data.completed
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload);
        },
        updateTodo: (state, action) => {
            const editedTodo = {
                _id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed
            };
            state.todos = state.todos.map((todo) => todo._id === editedTodo._id ? editedTodo : todo);
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo._id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        },
        clearTodos: (state) => {
            state.todos = [];
        }
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, completeTodo, clearTodos } = todoSlice.actions;

