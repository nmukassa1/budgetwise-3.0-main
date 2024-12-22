"use client";

import { createTransaction } from "@/lib/mutations";
import Form from "@/components/Form"; // Import the reusable form component
import { usePot } from "@/lib/context/PotContext";
import { useEffect, useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

interface AddWithdrawFormProps {
  setOpenDrawer: (open: boolean) => void;
  selectedAction: string | null;
}

function AddWithdrawForm({
  setOpenDrawer,
  selectedAction,
}: AddWithdrawFormProps) {
  const { pot: potItem } = usePot();
  const {id: potId} = potItem;
  const [transactionName, setTransactionName] = useState("");
  const [repeat, setRepeat] = useState(false);

  const handleRepeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(event.target.checked);
  };

  useEffect(() => {
    const handleTransactionName = () => {
      return selectedAction === "withdraw" ? "You withdrew" : "You've added";
    };

    setTransactionName(handleTransactionName());
  }, [selectedAction]);

  return (
    <Form
      setOpenDrawer={setOpenDrawer}
      action={createTransaction}
      title={selectedAction === "withdraw" ? "Withdraw Amount" : "Add Amount"}
      amountPlaceholder="0.00"
      amountName="amount"
    >

    <div className="flex items-center gap-2 mt-4">
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
      />
    </div>
      {/* Optional child component for hidden fields */}
      <>
        <input type="hidden" name="category_type" value="pots" />
        <input type="hidden" name="pot_id" value={potId} />
        <input type="hidden" name="name" value={transactionName} />
        <input type="hidden" name="repeat" value={repeat ? 'true' : 'false'} />
      </>
    </Form>
  );
}

export default AddWithdrawForm;
