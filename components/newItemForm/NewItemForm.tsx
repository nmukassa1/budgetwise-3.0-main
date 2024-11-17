import React, { useState } from 'react';
import ItemName from './ItemName';
import TypeInput from './TypeInput';
import DateInput from './DateInput';
import RepeatInput from './RepeatInput';
import CategoryInput from './CategoryInput';



const NewItemForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('income');
    

    return (
        <form className="text-primary rounded-md w-full max-w-md mx-auto">
            <ItemName />
            <TypeInput selectedType={selectedType} setSelectedType={setSelectedType} />
            <DateInput />
            <RepeatInput />
            <CategoryInput selectedType={selectedType} />
            <div className="border-t mt-4 pt-4">
                <button
                    type="button"
                    className="w-full p-2 rounded-md  border border-gray-700 "
                >
                    Add new category
                </button>
            </div>
            <div className=" mt-4">
                <button
                    type="submit"
                    className="w-full p-2 rounded-md  border border-gray-700 "
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default NewItemForm;