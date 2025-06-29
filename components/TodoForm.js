"use client";
import { useForm } from "react-hook-form";

const TodoForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
      description: "",
      priority: "medium",
    },
  });

  const submit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register("text", { required: "Title is required" })}
          className="input input-bordered w-full"
          placeholder="Title"
        />
        {errors.text && <p className="text-red-500">{errors.text.message}</p>}

        <textarea
          {...register("description")}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        />

        <select
          {...register("priority")}
          className="select select-bordered w-full"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
