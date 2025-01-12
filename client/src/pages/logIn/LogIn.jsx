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
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Login.jpeg')" }} // Corrected image path
    >
      <div className="bg-white shadow-md p-10 rounded-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <p className="text-gray-600 mb-6">Enter your details to continue</p>
        <form onSubmit={handleLogin} className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="p-2 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="mb-2 font-medium">
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-blue-500 hover:underline"
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
