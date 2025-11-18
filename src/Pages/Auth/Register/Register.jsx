import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../Social-login/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { registerUser } = useAuth();

  // handle register function
  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((getUser) => {
        console.log(getUser.user);
        toast.success("You are registered successfully");
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-2">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{6,}$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters long
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm">
                Must contain uppercase, lowercase, number & special character
              </p>
            )}
          </div>

          {/* Login Link */}
          <p className="text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline ms-1">
              Login
            </Link>
          </p>

          {/* Submit Button */}
          <button className="btn bg-primary text-black w-full rounded-xl text-lg">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
