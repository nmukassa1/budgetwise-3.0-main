"use client";

import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import Title from "@/components/form/Title";
import useCustomForm from "@/lib/hooks/useCustomForm";
import { useEffect } from "react";

interface FormData {
    [key: string]: string | number 
}

interface EditItemProps {
    setOpenDrawer: (open: boolean) => void;
    item: {id: number, name: string, target_amount?: number, budget_amount?: number};
    tableName: string;
    formAction: (formData: FormData) => Promise<object>;
  }

function EditItem({ setOpenDrawer, item, tableName, formAction }: EditItemProps) {

  const {id, name, target_amount, budget_amount } = item;

  const amount = target_amount || budget_amount || 0;

  const { formData, handleChange, handleSubmit, pending, result } = useCustomForm({
    initialFormData: {id, name, amount},
    action: formAction
  });

  useEffect(() => {
    console.log(result);
    
    if('status' in result){
      if(result.status === 'success'){
        setOpenDrawer(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Title title="Edit" />
      <Input name="name" placeholder="Name" type="text" id="name" handleChange={handleChange} value={formData.name || ''} />

      {tableName === 'pots' && (
        <Input name="target_amount" placeholder="Goal" type="number" id="target_amount" handleChange={handleChange} value={formData.amount || ''} />
        )}

        {tableName === 'budget' && (
        <Input name="budget_amount" placeholder="Budget" type="number" id="budget_amount" handleChange={handleChange} value={formData.budget_amount || formData.target_amount } />
        )}

      <SubmitButton pending={pending} />
    </form>
  );
}

export default EditItem;
