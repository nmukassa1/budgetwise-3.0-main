"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import { VisibilityOff } from "@mui/icons-material";

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): Errors => {
    const errors: Errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <form method="post" onSubmit={handleSubmit} className="login-form">
      <div className="mb-4 w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4 w-full">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="visibility-btn">
            <VisibilityOff />
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button type="submit" className="auth-submit-btn">SIGN IN</button>
    </form>
  );
}