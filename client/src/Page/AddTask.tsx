import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../components/Header";

type FormValues = {
  title: string;
  description: string;
};

const AddTask: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Task Added:", data);
    // Reset form fields
    reset();
  };

  return (
    <div className="flex justify-center bg-gray-300 h-screen w-screen">
      <div className="flex flex-col h-full min-w-xl rounded-md bg-white overflow-hidden relative">
        <Header headingText="Add Task" />
        <main className="flex-grow overflow-y-auto p-4">
          <form
            className="flex flex-col p-6 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              id="title"
              {...register("title", { required: "Title is required" })}
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
              className="mt-16 pmclr h-12 font-bold text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition"
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
