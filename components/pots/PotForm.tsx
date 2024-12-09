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

function PotForm({setOpenDrawer} : {setOpenDrawer: Function}) {
    const [formData, setFormData] = useState<FormData>(defaultformData);

    const [ state, action, pending ] = useActionState(createNewPot, { errors: {} });

    const handleChange = (e) => {
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
    }, [state]);
   

    return (
        <form
            className="text-secondary w-full "
            action={action}
        >
            <div className="flex flex-col gap-4">
                <h2 className="text-center">New pot</h2>
                <div className="flex items-center gap-4">
                    <label className="shrink-0" htmlFor="name">Pot Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                    {state?.errors?.name && ( <p className="text-red-500">{state.errors.name}</p> )}

                {/* Budget Amount */}
                <div className="flex items-center gap-4">
                    <label className="shrink-0" htmlFor="goal">Pot Goal</label>
                    <input
                        type="number"
                        name="goal"
                        id="goal"
                        className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full"
                        value={formData.goal}
                        onChange={handleChange}
                    />
                </div>
                   {state?.errors?.goal && ( <p className="text-red-500">{state.errors.goal}</p> )}

               {state?.errors?.general && ( <p className="text-red-500">{state.errors.general}</p> )}
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
