"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Todo App</h1>
      <p className="mb-6 text-lg text-center max-w-xl">
        Organize your tasks efficiently and stay productive. Create, manage, and
        track your todos seamlessly.
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={() => router.push("/dashboard")}
      >
        Create Todo
      </button>
    </main>
  );
};

export default Page;
