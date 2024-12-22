"use client";

import { createNewPot } from "@/lib/mutations";
import Form from "@/components/Form"; // Import the reusable form component

function PotForm({ setOpenDrawer }: { setOpenDrawer: (open: boolean) => void }) {
  return (
    <Form
      setOpenDrawer={setOpenDrawer}
      action={createNewPot}
      title="New Pot"
      amountPlaceholder="Pot Goal"
      amountName="target_amount"
    />
  );
}

export default PotForm;
