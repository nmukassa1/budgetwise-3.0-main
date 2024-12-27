"use client";

import React, { useState, useEffect } from "react";
import useActionState from "@/lib/hooks/useActionState";

export interface Errors {
  name?: string[];
  error?: string;
}

export interface State {
  errors?: Errors;
  results?: { message: string };
}

interface FormProps {
  setOpenDrawer: (open: boolean) => void;
  action: (currentState: State, data: object) => Promise<State>;
  title: string;
  amountPlaceholder: string;
  amountName: string;
  children?: React.ReactNode;
}


function Form({
  setOpenDrawer,
  action,
  title,
  amountPlaceholder,
  amountName,
  children,
}: FormProps) {

  const defaultFormData = {
    name: "",
    [amountName]: "", // Dynamically add the amountName field
  };

  const [formData, setFormData] = useState(defaultFormData);

  // Use the custom hook to handle async actions and manage state
  const { state, action: formAction, pending } = useActionState<object, State>(
    action,
    { errors: {}, results: { message: "" } } // Initial state
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (state?.results?.message) {
      setOpenDrawer(false);
    }
  }, [state, setOpenDrawer]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const additionalData = Array.from(new FormData(e.target as HTMLFormElement)).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
    await formAction({ ...formData, ...additionalData });
  };

  return (
    <form className="text-secondary w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <h2 className="text-center">{title}</h2>

        {/* Name Input */}
        <div className="flex items-center gap-4">
          <input
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {state.errors?.name && <p className="text-red-500">{state.errors.name}</p>}

        {/* Amount Input */}
        <div className="flex items-center gap-4">
          <input
            placeholder={amountPlaceholder}
            type="number"
            name={amountName}
            id={amountName}
            className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center"
            value={formData.amountName}
            onChange={handleChange}
          />
        </div>
        {state?.errors?.error && <p className="text-red-500">{state.errors.error}</p>}
      </div>

      {/* Optional child component for hidden fields */}
      {children}

      {/* Submit Button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-secondary text-primary py-4 rounded-md mt-2"
          disabled={pending}
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Form;
