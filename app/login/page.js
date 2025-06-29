import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-center my-5 text-2xl font-semibold underline">
        LogIn Page
      </h2>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
