import useFormState from "@/lib/hooks/useFormState"

export default function Testform(){

    const {formData, handleChange} = useFormState();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <form className="text-secondary w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <h2 className="text-center">Test</h2>
  
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
          {/* {state.errors?.name && <p className="text-red-500">{state.errors.name}</p>} */}
  
          {/* Amount Input */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              name="amount"
              className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          {/* {state?.errors?.error && <p className="text-red-500">{state.errors.error}</p>} */}
        </div>
  
       
  
        {/* Submit Button */}
        {/* <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-secondary text-primary py-4 rounded-md mt-2"
            disabled={pending}
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div> */}
      </form>
    )
}