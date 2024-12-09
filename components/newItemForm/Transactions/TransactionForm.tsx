import React, { useActionState, useState } from 'react';
import TransactionItemName from './TransactionItemName';
import TransactionTypeInput from './TransactionTypeInput';
import TransactionDateInput from './TransactionDateInput';
import TransactionRepeatInput from './TransactionRepeatInput';
import TransactionCategoryInput from './TransactionCategoryInput';
import TransactionAmount from './TransactionAmount';
import { createTransaction } from '@/lib/mutations';

// NOTE: This components sits in the Modal.tsx component which resides in the MobileHero component

const TransactionForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('income');
    const [state, action, pending] = useActionState(createTransaction, { errors: {} });
    

    return (
            <form className="text-primary rounded-md w-full max-w-md mx-auto" action={action}>
                <TransactionAmount />
                {state?.errors?.transaction_amount && (<p className="text-red-500">{state.errors.transaction_amount}</p>)}
                <TransactionItemName />
                {state?.errors?.name && (<p className="text-red-500">{state.errors.name}</p>)}
                <TransactionTypeInput selectedType={selectedType} setSelectedType={setSelectedType} />
                <TransactionDateInput />
                <TransactionRepeatInput />
                <TransactionCategoryInput selectedType={selectedType} />
                {state?.errors?.category && (<p className="text-red-500">{state.errors.category}</p>)}
                {state?.errors?.general && (<p className="text-red-500">{state.errors.general}</p>)}
                {state?.results?.message && (<p className="text-green-500">{state.results.message}</p>)}
                <div className=" mt-4">
                    <button
                        type="submit"
                        className="w-full p-2 rounded-md  border border-gray-700"
                    >
                        {pending ? 'Adding...' : 'Add Transaction'}
                    </button>
                </div>
            </form>
    );
};

export default TransactionForm;