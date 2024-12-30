import Input from '@/components/form/Input';
import Title from '@/components/form/Title';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';
import useCustomForm from '@/lib/hooks/useCustomForm';
import { BudgetType } from '@/lib/types';
import RadioButton from './RadioButton';
import { createBudgetTransaction } from '@/lib/mutations';
function BudgetTransactionForm({ setOpenDrawer, budgets }: { setOpenDrawer: (open: boolean) => void, budgets: BudgetType[] }) {


    const customFormData = {
        budget_id: budgets[0].id,
        category_type: "expense",
        transaction_date: new Date().toISOString(),
      };

    const {handleChange, formData, result, pending, handleSubmit} = useCustomForm({
        initialFormData: customFormData,
        action: createBudgetTransaction,
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

    const [budgetSelected, setBudgetSelected] = useState<string | null>(budgets[0].id.toString());

    useEffect(() => {
       if(formData.budget_id){
           setBudgetSelected(formData.budget_id.toString());
        }

    }, [formData])

   

    return ( 
        <form onSubmit={handleSubmit}>
            <Title title="New Transaction" />
            <div className='flex flex-col gap-6'>
                <div>
                    <Input handleChange={handleChange} value={formData.name} name="name" placeholder="Name" type="text" id="name" />
                    <Input handleChange={handleChange} value={formData.amount} name="amount" placeholder="Amount" type="number" id="amount" />
                </div>
                <div className='overflow-scroll max-h-[300px] border-2 rounded-md grid grid-cols-2'>
                    {budgets.map(budget => (
                        <RadioButton key={budget.id} budget={budget} handleChange={handleChange} budgetSelected={budgetSelected} />
                    ))}
                </div>
                <SubmitButton className='absolute bottom-[3vh]' pending={pending} /> 
            </div>
           
        </form>
     );
}

export default BudgetTransactionForm;