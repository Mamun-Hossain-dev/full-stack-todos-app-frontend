"use client";
import { useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { setUser } = useAuthContext();
  const router = useRouter();

  //handle onsubmit
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("auth/login", data);
      // console.log(res.data);
      const { user, msg, accessToken } = res.data;

      // set accessToken
      setUser({ ...user, accessToken });
      reset();
      router.push("/dashboard");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="max-w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md text-black"
      >
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
          className="bg-blue-600 w-[120px] text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
