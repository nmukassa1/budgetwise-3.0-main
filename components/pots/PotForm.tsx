/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createNewPot } from "@/lib/mutations";
// import Form from "@/components/Form"; // Import the reusable form component

// function PotForm({ setOpenDrawer }: { setOpenDrawer: (open: boolean) => void }) {
//   return (
//     <Form
//       setOpenDrawer={setOpenDrawer}
//       action={createNewPot}
//       title="New Pot"
//       amountPlaceholder="Goal"
//       amountName="target_amount"
//     />
//   );
// }
// PotForm.tsx


import React, { useEffect } from "react";
import useCustomForm from "@/lib/hooks/useCustomForm";
import Input from "../form/Input";
import Title from "../form/Title";
import SubmitButton from "../form/SubmitButton";

function PotForm({ setOpenDrawer }: { setOpenDrawer: (open: boolean) => void }) {
  const { formData, handleChange, handleSubmit, pending, result } = useCustomForm({
    initialFormData: {},
    action: createNewPot
  });

  useEffect(() => {
    console.log(result);
    if(result && result.status === 'success'){
      setOpenDrawer(false);
    }
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Title title="New Pot" />
      <Input name="name" placeholder="Pot Name" type="text" id="name" handleChange={handleChange} value={formData.name || ''} />
      {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.name}</p>}
      <Input name="target_amount" placeholder="Goal" type="number" id="target_amount" handleChange={handleChange} value={formData.target_amount || ''} />
      <SubmitButton pending={pending} />
    </form>
  );
}

export default PotForm;


