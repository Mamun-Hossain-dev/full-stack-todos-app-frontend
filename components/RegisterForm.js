"use client";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  //handle onsubmit
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("register form data", data);
    } catch (err) {
      alert("register failed!");
    }
  };

  return (
    <div className="max-w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md text-black"
      >
        <label>Name</label>
        <input
          {...register("name", {
            required: true,
            minLength: {
              value: 3,
              message: "name must be above 3 character's",
            },
          })}
          placeholder="name"
          className="mb-2 p-2 border w-full"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
        <br />

        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="Email"
          className="mb-2 p-2 border w-full"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
        <br />

        {/* password */}
        <label>Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "password must be 6 characters or more",
            },
          })}
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border w-full"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "isSubmitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
