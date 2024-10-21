"use client"

import { useState } from "react";
import { VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log(formData);
      setErrors({});
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[500px] m-auto">
      <div className="mb-4 w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-[20px] text-gray-700 border rounded-[1000px] text-center focus:outline-none focus:border-brand"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4 w-full">
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-[20px] text-gray-700 border rounded-[1000px] text-center focus:outline-none focus:border-brand"
          />
          <button onClick={(e) => e.preventDefault()} className="absolute inset-y-0 right-2 flex items-center px-3 text-gray-500">
            <VisibilityOff />
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button type="submit" className="w-full py-[10px] mb-4 text-white bg-black border rounded-[1000px] focus:outline-none hover:bg-brand transition duration-300">SIGN IN</button>
    </form>
  );
}