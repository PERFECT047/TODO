import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/models";

interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                _id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const editedTodo = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed
            };
            state.todos = state.todos.map((todo) => todo._id == editedTodo._id ? editedTodo : todo);
        },
        completeTodo: (state, action) => {
            const completedTodo = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed
            };
            state.todos = state.todos.map((todo) => todo._id == completedTodo._id ? completedTodo : todo);
        },
        clearTodos: (state, action) => {
            state.todos = [];
        }
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, completeTodo, clearTodos } = todoSlice.actions;

// const addTodo = (state: Todo[], action: PayloadAction<Todo>) => {
//     const todo = {
//         id: action.payload.id,
//         title: action.payload.title,
//         description: action.payload.description,
//         completed: action.payload.completed
//     };
//     state.push(todo);
// }

// const removeTodo = (state: Todo[], action: PayloadAction< {id: string} >) => {
//     return state.filter((todo) => todo.id !== action.payload.id);
// } 

// const editTodo = (state: Todo[], action: PayloadAction<Todo>) => {
//     const editedTodo = {
//         id: action.payload.id,
//         title: action.payload.title,
//         description: action.payload.description,
//         completed: action.payload.completed
//     };
//     return state.map((todo) => todo.id == editedTodo.id ? editedTodo : todo);
// }

// const completeTodo = (state: Todo[], action: PayloadAction<Todo>) => {
//     const completedTodo = {
//         id: action.payload.id,
//         title: action.payload.title,
//         description: action.payload.description,
//         completed: action.payload.completed
//     };
//     return state.map((todo) => todo.id == completedTodo.id ? completedTodo : todo);
// }