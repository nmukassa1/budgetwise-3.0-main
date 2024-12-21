"use client";

import { usePot } from "@/lib/context/PotContext";
import useActionState from "@/lib/hooks/useActionState";
import { createTransaction } from "@/lib/mutations";
import { FormControlLabel, Switch } from "@mui/material";
import { useAddWithdrawForm } from "../hooks/useAddWithdrawForm";

interface State{
    errors?: Errors;
    results?: {message: string};
}

interface Errors {
  name?: string[];
}

interface AddWithdrawFormProps {
  setOpenDrawer: (open: boolean) => void;
  selectedAction: string | null;
}

function AddWithdrawForm({ setOpenDrawer, selectedAction }: AddWithdrawFormProps) {
  const { pot: potItem } = usePot();
  const { state, action, pending } = useActionState<unknown, State>(createTransaction, { errors: {}, results: {} });

  const { formData, transactionName, handleChange } = useAddWithdrawForm({
    potItem,
    selectedAction,
    setOpenDrawer,
    state,
  });

  return (
    <form className="text-secondary w-full" action={action}>
      <div className="flex flex-col gap-4">
        <h2 className="text-center">{selectedAction === "withdraw" ? "Withdraw" : "Add"} Amount</h2>

        {/* Amount Input */}
        <div className="flex items-center gap-4">
          <div>£</div>
          <input
            onChange={handleChange}
            value={formData.amount}
            name="amount"
            type="number"
            placeholder="0.00"
            className="text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center"
          />
        </div>
        {state.errors?.amount && <p className="text-red-500">{state.errors.amount}</p>}

        {/* Repeat Option */}
        <div className="flex items-center gap-2 mt-4">
          <FormControlLabel
            control={<Switch name="repeat" />}
            label="Repeat?"
            labelPlacement="start"
          />
        </div>

        {/* Hidden Fields */}
        <input type="hidden" value={"pots"} name="category_type" />
        <input type="hidden" value={potItem.id} name="pot_id" />
        <input type="hidden" value={transactionName} name="name" />

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className={`w-full text-primary py-4 rounded-md mt-2 ${formData.amount === "" ? "bg-[grey]" : "bg-secondary"}`}
            disabled={pending}
          >
            {pending
              ? "Submitting..."
              : `${selectedAction ? selectedAction.charAt(0).toUpperCase() + selectedAction.slice(1) : ""}`}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddWithdrawForm;
