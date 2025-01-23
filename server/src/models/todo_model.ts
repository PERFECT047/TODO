import mongoose, { Schema, Document } from "mongoose";
import { Todo } from "./todo";

const TodoSchema: Schema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false }
});

export default mongoose.model<Todo>("Todo", TodoSchema);