import React from "react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-12 rounded-md shadow-md w-96">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2" >
                Username
              </label>
              <input type="text" id="username" name="username" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your username" />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input type="password" id="password" name="password" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
