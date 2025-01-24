import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { addTodo } from "../features/todo/todoSlice";
import { Todo } from "../models/models";
import { useDispatch, useSelector } from "react-redux";

type FormValues = {
  title: string;
  description: string;
};

const AddTask: React.FC = () => {

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const todo = todos.filter((todo: Todo) => todo._id == id);
  console.log(todos);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try{
      
      const todo = await axios.put(`${BACKEND_URL}${id}`,{

        title: data.title,
        description: data.description
      })

      dispatch(clearTodo(id));
      dispatch(addTodo(todo.data));

      reset();
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center bg-gray-300 h-screen w-screen">
      <div className="flex flex-col h-full min-w-xl rounded-md bg-white overflow-hidden relative">
        <Header headingText="Edit Task" />
        <main className="flex-grow overflow-y-auto p-4">
          <form
            className="flex flex-col p-6 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              id="title"
              {...register("title", { required: "Title is required" })}
              defaultValue={todo[0]?.title}
              placeholder="Title"
              className={`p-2 border-b mb-4 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <span className="text-red-500 text-sm mb-4">
                {errors.title.message}
              </span>
            )}

            <input
              id="description"
              {...register("description", { required: "Description is required" })}
              defaultValue={todo[0]?.description}
              placeholder="Detail"
              className={`p-2 border-b mt-8 mb-4 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <span className="text-red-500 text-sm mb-4">
                {errors.description.message}
              </span>
            )}
            
            <button
              type="submit"
              className="mt-16 pmclr h-12 font-bold text-white py-2 px-4 rounded-xl hover:scale-102"
            >
              ADD
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddTask;
function clearTodo(id: string | undefined): any {
  throw new Error("Function not implemented.");
}

