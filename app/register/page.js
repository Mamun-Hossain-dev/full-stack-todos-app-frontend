import RegisterForm from "@/components/RegisterForm";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-center my-5 text-2xl font-semibold underline">
        Register Page
      </h2>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
