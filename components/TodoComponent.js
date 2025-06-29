"use client";

import { useAuthContext } from "@/context/AuthContext";
import TodoForm from "./TodoForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import TodoItem from "./TodoItem";

const TodoComponent = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!user) return router.push("/login");

    axios
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleCreate = async (data) => {
    const res = await axios.post("/todos", data);
    setTodos((prev) => [...prev, res.data]);
  };

  const handleUpdate = async (id, data) => {
    const res = await axios.put("/todos/${id}", data);
    setTodos((prev) => prev.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const handleDelete = async (id) => {
    await axios.delete("/todos/${id}");
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Your Todos</h1>
        <TodoForm onSubmit={handleCreate} />
        <div className="mt-4 space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
