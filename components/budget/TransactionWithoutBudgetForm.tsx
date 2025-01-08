import { useEffect, useState } from "react";
import DrawerContainer from "../DrawerContainer";
import Title from "../form/Title";
import Input from "../form/Input";
import useCustomForm from "@/lib/hooks/useCustomForm";
import { createBudgetTransaction } from "@/lib/mutations";
import SubmitButton from "../form/SubmitButton";

function TransactionWithoutBudgetForm({id}: {id: number}) {

    const customFormData = {
        budget_id: id,
        category_type: "expense",
        transaction_date: new Date().toISOString(),
      };

    const { formData, handleChange, handleSubmit, pending, result} = useCustomForm(
        {
            initialFormData: customFormData,
            action: createBudgetTransaction
        }
    )

    const [openDrawerTransaction, setOpenDrawerTransaction] = useState(false);
    const openTransactionDrawer = () => {
        setOpenDrawerTransaction(true);
    }

    useEffect(() => {
        if(result && result.status === 'success') {
            setOpenDrawerTransaction(false);
        }
    }, [result])

    return ( 
        <div>
            <button onClick={() => {
            openTransactionDrawer();
            }} className="h-[50px] w-full rounded-md bg-primary">+ Transaction</button>
            <DrawerContainer openDrawer={openDrawerTransaction} setOpenDrawer={setOpenDrawerTransaction} position="top">
                <Title title="New Transaction" />
                <form onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Name" type="text" id="name" handleChange={handleChange} value={formData.name} />
                    {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.name}</p>}
                    <Input name="amount" placeholder="Amount" type="number" id="amount" handleChange={handleChange} value={formData.amount} />
                    {result && result.status === 'error' && <p className="text-red-500 text-sm">{result.data.amount}</p>}

                    <SubmitButton pending={pending} />
                </form>
            </DrawerContainer>
        </div>
     );
}

export default TransactionWithoutBudgetForm;