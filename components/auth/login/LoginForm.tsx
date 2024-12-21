"use client"

// import { useState, ChangeEvent, useActionState } from "react";
import { useState, ChangeEvent, useEffect } from "react";
import { VisibilityOff } from "@mui/icons-material";
import {login} from "./actions";
import useActionState from "@/lib/hooks/useActionState";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  // const [state, action, pending] = useActionState(login, { errors: {} });
  const {state, action, pending} = useActionState(login, { errors: {} });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(state);
    
  }, [state, action])
    

  return (
    <form action={action} className="login-form">
      <div className="mb-4 w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        {"email" in state.errors && state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
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
        {"password" in state.errors && state.errors.password && <p className="text-red-500">{state.errors.password}</p>}
        { "passwordMatch" in state?.errors && state.errors.passwordMatch && <p className="text-red-500">{state.errors.passwordMatch}</p>}
      </div>
      <button disabled={pending} type="submit" className="auth-submit-btn">{pending ? 'Loading...' : 'Log In'}</button>
    </form>
  );
}