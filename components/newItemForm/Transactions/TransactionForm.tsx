import React, { useState } from 'react';
import TransactionItemName from './TransactionItemName';
import TransactionTypeInput from './TransactionTypeInput';
import TransactionDateInput from './TransactionDateInput';
import TransactionRepeatInput from './TransactionRepeatInput';
import TransactionCategoryInput from './TransactionCategoryInput';
import TransactionAmount from './TransactionAmount';

// NOTE: This components sits in the Modal.tsx component which resides in the MobileHero component

const TransactionForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('income');
    

    return (
            <form className="text-primary rounded-md w-full max-w-md mx-auto" method='get' onSubmit={() => console.log(FormData)}>
                <TransactionAmount />
                <TransactionItemName />
                <TransactionTypeInput selectedType={selectedType} setSelectedType={setSelectedType} />
                <TransactionDateInput />
                <TransactionRepeatInput />
                <TransactionCategoryInput selectedType={selectedType} />
                <div className=" mt-4">
                    <button
                        type="submit"
                        className="w-full p-2 rounded-md  border border-gray-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
    );
};

export default TransactionForm;