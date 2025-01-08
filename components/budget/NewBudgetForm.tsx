"use client";

import { createNewBudget } from "@/lib/mutations";
import useCustomForm from "@/lib/hooks/useCustomForm";
import Title  from "@/components/form/Title";
import { useEffect } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";



function NewBudgetForm({ setOpenDrawer }: { setOpenDrawer: (open: boolean) => void }) {
  const { formData, handleChange, handleSubmit, pending, result } = useCustomForm({
    initialFormData: {},
    action: createNewBudget
  });

  useEffect(() => {
    console.log(result);
    
    if( result){
      if(result.status === 'success'){
        setOpenDrawer(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Title title="New Budget" />
      <Input name="name" placeholder="Budget Name" type="text" id="name" handleChange={handleChange} value={formData.name || ''} />
      {result && result.status === 'error' && <p className="text-red-500 text-sm">Error: {result.data.name}</p>}
      <Input name="budget_amount" placeholder="Budget" type="number" id="budget_amount" handleChange={handleChange} value={formData.budget_amount || ''} />
      {result && result.status === 'error' && <p className="text-red-500 text-sm">Error: {result.data.budget_amount}</p>}
     <SubmitButton pending={pending} />
    </form>
  );
}

export default NewBudgetForm;
