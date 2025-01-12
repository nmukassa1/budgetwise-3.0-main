import Input from '@/components/form/Input';
import Title from '@/components/form/Title';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';
import useCustomForm from '@/lib/hooks/useCustomForm';
import RadioButton from './RadioButton';
import { createBudgetTransaction } from '@/lib/mutations';
import { useBudget } from './BudgetProvider';
function BudgetTransactionForm({ setOpenDrawer }: { setOpenDrawer: (open: boolean) => void}) {

    const {budgets} = useBudget();


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
        
        if(result && result.status === 'success'){
            setOpenDrawer(false);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    const [budgetSelected, setBudgetSelected] = useState<string | null>(null);

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
                    {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.name}</p>}
                    <Input handleChange={handleChange} value={formData.amount} name="amount" placeholder="Amount" type="number" id="amount" />
                    {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.amount}</p>}
                </div>
                <div className='overflow-scroll max-h-[300px] text-3xl'>
                    {budgets.map(budget => (
                        <RadioButton key={budget.id} budget={budget} handleChange={handleChange} budgetSelected={budgetSelected} />
                    ))}
                </div>
                <SubmitButton className='' pending={pending} /> 
            </div>
           
        </form>
     );
}

export default BudgetTransactionForm;