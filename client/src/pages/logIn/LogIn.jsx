import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    if (email && password) {
      console.log("Logged in:", { email, password });
      navigate("/home"); // Redirect to Home page
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div
      className="flex  items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Login.jpeg')" }} // Corrected image path
    >
      <div className="bg-white w-[480px] py-16 px-12 shadow-lg   rounded-2xl  ">
        {/* Header */}
        <h1 className="text-[45px] font-normal text-gray-900 mb-2">Log In</h1>
        <p className="text-gray-600 mt-4 text-base  mb-12">
          Enter your details to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col ">
          {/* Email Input */}
          <label
            htmlFor="email"
            className="mb-3 text-lg font-medium text-gray-700"
          >
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="p-3 mb-6 text-lg text-gray-900 bg-[#F7F2FA] rounded-lg  border-b border-[#6750A4] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <label
            htmlFor="password"
            className="mb-3 text-lg font-medium text-gray-700"
          >
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-3 mb-8 text-lg text-gray-900 bg-[#F7F2FA] rounded-lg border-b border-[#6750A4] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex  items-center justify-between mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-5 h-5 bg-[#420d8b] text-blue-600 border-[#420d8b] rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-lg text-gray-700"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="text-lg text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#420d8b] text-white py-3 rounded-full text-lg font-medium shadow-md focus:outline-none focus:ring-2  focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Redirect */}
        <p className="mt-8 font-semibold text-lg  text-slate-500">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-blue-500 ml-1 hover:underline"
            onClick={handleSignUpRedirect}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
