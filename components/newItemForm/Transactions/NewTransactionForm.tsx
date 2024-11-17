import React, { useState } from 'react';
import ItemName from './ItemName';
import TypeInput from './TypeInput';
import DateInput from './DateInput';
import RepeatInput from './RepeatInput';
import CategoryInput from './CategoryInput';
import Amount from './Amount';

// NOTE: This components sits in the Modal.tsx component which resides in the MobileHero component

const NewTransactionForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('income');
    

    return (
            <form className="text-primary rounded-md w-full max-w-md mx-auto" method='get' onSubmit={() => console.log(FormData)}>
                <Amount />
                <ItemName />
                <TypeInput selectedType={selectedType} setSelectedType={setSelectedType} />
                <DateInput />
                <RepeatInput />
                <CategoryInput selectedType={selectedType} />
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

export default NewTransactionForm;