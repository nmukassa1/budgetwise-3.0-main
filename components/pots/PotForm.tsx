"use client";

import { useState, useActionState, useEffect } from "react";
import { createNewPot } from "@/lib/mutations";

interface FormData {
    name: string,
    goal: string
  }

const defaultformData: FormData = {
    name: "",
    goal: ''
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function PotForm({setOpenSlide} : {setOpenSlide: Function}) {
    const [formData, setFormData] = useState<FormData>(defaultformData);

    // Hook to manage the action state
    const [ state, action, pending ] = useActionState(createNewPot, { errors: {} });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (state?.results?.message) {
            setOpenSlide(false);
        }
    }, [state]);
   

    return (
        <form
            className="text-primary w-full "
            action={action}
        >
            <div className="flex flex-col gap-4">
                {/* Category Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Pot Name</label>
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

                {/* Budget Amount */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="goal">Pot Goal</label>
                    <input
                        type="number"
                        name="goal"
                        id="goal"
                        className="border border-gray-700 rounded-md p-2"
                        value={formData.goal}
                        onChange={handleChange}
                    />
                   {state?.errors?.goal && ( <p className="text-red-500">{state.errors.goal}</p> )}
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

export default PotForm;
