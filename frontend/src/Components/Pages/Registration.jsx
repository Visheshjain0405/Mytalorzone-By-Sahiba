import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const { firstName, lastName, email, password } = formData;

    if (!firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      toast.success(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", password: "" }); // Reset form
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
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
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
