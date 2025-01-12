"use client";

import { createTransaction } from "@/lib/mutations";
import { usePot } from "@/lib/context/PotContext";
import { useEffect, useState } from "react";
// import { FormControlLabel, Switch } from "@mui/material";
import useCustomForm from "@/lib/hooks/useCustomForm";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import Title from "@/components/form/Title";

interface AddWithdrawFormProps {
  setOpenDrawer: (open: boolean) => void;
  selectedAction: string | null;
}

function AddWithdrawForm({
  setOpenDrawer,
  selectedAction,
}: AddWithdrawFormProps) {
  const { filteredPot: potItem } = usePot();
  
  const potId = potItem?.id || "";

  // const [repeat, setRepeat] = useState(false);
  const [transactionName, setTransactionName] = useState("");

  const customFormData = {
    pot_id: potId,
    category_type: "pot",
    action: selectedAction || "",
    // repeat: repeat ? 'true' : 'false',
    transaction_date: new Date().toISOString(),
    name: selectedAction === "withdraw" ? "You withdrew" : "You've added",
  };

  const { formData, handleChange, handleSubmit, pending, result } = useCustomForm({
    initialFormData: customFormData,
    action: createTransaction
  });

  // const handleRepeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRepeat(event.target.checked);
  // };

  useEffect(() => {
    const handleTransactionName = () => {
      return selectedAction === "withdraw" ? "You withdrew" : "You've added";
    };

    setTransactionName(handleTransactionName());
  }, [selectedAction]);

  useEffect(() => {
    console.log(result);
    if(result && result.status === 'success'){
      setOpenDrawer(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid  gap-2 mt-4">
        <Title title={selectedAction === "withdraw" ? "Withdraw" : "Add"} />
        <Input name="amount" placeholder="0.00" type="number" id="amount" handleChange={handleChange} value={formData.amount || ''} />
        {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.amount}</p>}
        
{/* 
        <FormControlLabel
          control={
            <Switch
              name="repeat"
              checked={repeat}
              onChange={handleRepeatChange}
            />
          }
          label="Repeat?"
          labelPlacement="start"
        /> */}
        {/* Optional child component for hidden fields */}
        <div>
          <input type="hidden" name="action" value={selectedAction || ""} />
          <input type="hidden" name="category_type" value="pot" />
          <input type="hidden" name="pot_id" value={potId} />
          <input type="hidden" name="name" value={transactionName} />
          {/* <input type="hidden" name="repeat" value={repeat ? 'true' : 'false'} /> */}
          <input type="hidden" name="transaction_date" value={new Date().toISOString()} />
        </div>

        <SubmitButton pending={pending} />
      </div>
    </form>
  );
}

export default AddWithdrawForm;
