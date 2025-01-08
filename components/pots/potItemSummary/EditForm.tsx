"use client";

import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import Title from "@/components/form/Title";
import useCustomForm from "@/lib/hooks/useCustomForm";
import { editPot } from "@/lib/mutations";
import { PotType } from "@/lib/types";
import { useEffect } from "react";

function EditForm({ setOpenDrawer, potItem }: { setOpenDrawer: (open: boolean) => void, potItem: PotType }) {

  const {id, name, target_amount} = potItem;

  const { formData, handleChange, handleSubmit, pending, result } = useCustomForm({
    initialFormData: {id, name, target_amount},
    action: editPot
  });

  useEffect(() => {
    console.log(result);
      if(result?.status === 'success'){
        setOpenDrawer(false);
      }
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Title title="Edit Pot" />
      <Input name="name" placeholder="Pot Name" type="text" id="name" handleChange={handleChange} value={formData.name || ''} />
      {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.name}</p>}
      <Input name="target_amount" placeholder="Goal" type="number" id="target_amount" handleChange={handleChange} value={formData.target_amount || ''} />
      {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.target_amount}</p>}
      <SubmitButton pending={pending} />
    </form>
  );
}

export default EditForm;
