"use client";

import { useState, useEffect } from "react";
import { createNewPot } from "@/lib/mutations";
import useActionState from "@/lib/hooks/useActionState";

interface FormData {
    name: string,
    target_amount: string
  }

const defaultformData: FormData = {
    name: "",
    target_amount: ''
};

interface Errors {
    name?: string[];
  }

function PotForm({setOpenDrawer} : { setOpenDrawer: (open: boolean) => void }) {
    const [formData, setFormData] = useState<FormData>(defaultformData);

    const { state, action, pending } = useActionState(createNewPot, { errors: {} as Errors });

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
   

    return (
        <form
            className="text-secondary w-full "
            action={action}
        >
            <div className="flex flex-col gap-4">
                <h2 className="text-center">New pot</h2>
                <div className="flex items-center gap-4">
                    <input
                        placeholder="Pot name"
                        type="text"
                        name="name"
                        id="name"
                        className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div> 
                    {state.errors?.name && ( <p className="text-red-500">{state.errors.name}</p> )}

                {/* Budget Amount */}
                <div className="flex items-center gap-4">
                    <input
                        placeholder="Pot goal"
                        type="number"
                        name="target_amount"
                        id="target_amount"
                        className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center"
                        value={formData.target_amount}
                        onChange={handleChange}
                    />
                </div>

               {state?.errors?.error && ( <p className="text-red-500">{state.errors.error}</p> )}
            </div>

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

export default PotForm;
