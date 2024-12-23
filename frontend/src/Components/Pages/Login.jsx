import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);
      toast.success(response.data.message);
      setFormData({ email: "", password: "" }); // Reset form
      // Add redirection logic after successful login, e.g., navigate to the dashboard
    } catch (error) {
      toast.error(error.response?.data?.error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 font-semibold rounded-md focus:outline-none focus:ring ${
                loading
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
