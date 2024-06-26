import React, { useState } from "react";
import api from "../../stores/api.js";
import { useAuthStore } from "../../stores/auth.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSchema from "../../lib/schemas/RegisterSchema.js";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const signUp = async (data) => {
    setLoading(true);
    api
      .post("authentication/signup", data)
      .then((response) => {
        login(response.data.username, response.data.token);
        toast.success("Successfuly Registered. You'll be redirected.");
        setTimeout(() => {
          location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.username[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="font-black text-center text-3xl flex flex-col">
              DRB <span className="text-xl">DJANGO-REACT-BOILERPLATE</span>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign UP</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit(signUp)}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      {...register("username")}
                      placeholder="Username"
                    />
                    <p className="text-red-500">{errors.username?.message}</p>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                    />
                    <p className="text-red-500">{errors.password?.message}</p>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      {...register("passwordrepeat")}
                      placeholder="Password Repeat"
                    />
                    <p className="text-red-500">
                      {errors.passwordrepeat?.message}
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">Sign In</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
