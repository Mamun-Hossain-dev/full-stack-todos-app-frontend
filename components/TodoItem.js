// components/TodoItem.jsx
"use client";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="border p-3 rounded bg-gray text-white shadow flex justify-between items-start">
      <div>
        <h2 className="font-semibold">{todo.text}</h2>
        <p>{todo.description}</p>
        <p className="text-sm">Priority: {todo.priority}</p>
        <p className="text-sm">
          Status: {todo.completed ? "✅ Completed" : "🕗 Pending"}
        </p>
      </div>
      <div className="space-x-1">
        <button
          onClick={() => onUpdate(todo._id, { completed: !todo.completed })}
          className="btn btn-xs btn-success"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
