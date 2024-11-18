"use client";

import { useState, useActionState } from "react";
import { createNewCategory } from "@/lib/mutations";

interface FormData {
    name: string,
    categoryType: string;
    budgetAmount: string
  }

const defaultformData: FormData = {
    name: "",
    categoryType: "income",
    budgetAmount: ''
};

function CategoryForm() {
    const [formData, setFormData] = useState<FormData>(defaultformData);

    // Hook to manage the action state
    const [ state, action, pending ] = useActionState(createNewCategory, { errors: {} });

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const result = await execute(formData); // Executes the server action

    //     if (result?.errors) {
    //         console.error("Validation errors:", result.errors);
    //     } else {
    //         console.log("Category created:", result);
    //         setFormData(defaultformData); // Reset form
    //     }
    // };

    return (
        <form
            className="text-primary rounded-md w-full max-w-md mx-auto"
            // method="post"
            // onSubmit={handleSubmit}
            action={action}
        >
            <div className="flex flex-col gap-4">
                {/* Category Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Category Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="border border-gray-700 rounded-md p-2"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {state?.errors?.name && ( <p className="text-red-500">{state.errors.name}</p> )}
                </div>

                {/* Category Type */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoryType">Category Type</label>
                    <select
                        name="categoryType"
                        id="categoryType"
                        className="border border-gray-700 rounded-md p-2"
                        value={formData.categoryType}
                        onChange={handleChange}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                        <option value="pots">Pots</option>
                    </select>
                </div>

                {/* Budget Amount */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="budgetAmount">Budget Amount</label>
                    <input
                        type="number"
                        name="budgetAmount"
                        id="budgetAmount"
                        className="border border-gray-700 rounded-md p-2"
                        value={formData.budgetAmount}
                        onChange={handleChange}
                    />
                   {state?.errors?.budgetAmount && ( <p className="text-red-500">{state.errors.budgetAmount}</p> )}
                </div>

               {state?.errors?.general && ( <p className="text-red-500">{state.errors.general}</p> )}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
                <button
                    type="submit"
                    className="w-full p-2 rounded-md border border-gray-700"
                    disabled={pending}
                >
                    {pending ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}

export default CategoryForm;
