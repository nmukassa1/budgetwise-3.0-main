import React, { useState } from 'react';

function Amount() {
    const [amount, setAmount] = useState<string>('');
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        // Allow only numbers and a single decimal point
        if (!isNaN(Number(value)) || value === '') {
            // Format to two decimal places if more than two decimal places are entered
            if (value.includes('.')) {
                const parts = value.split('.');
                if (parts[1].length > 2) {
                    value = `${parts[0]}.${parts[1].substring(0, 2)}`;
                }
            }
            setAmount(value);

            // Clear the previous timeout
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // Set a new timeout to add a "0" if needed
            const newTimeoutId = setTimeout(() => {
                if (value.includes('.') && value.split('.')[1].length === 1) {
                    setAmount(`${value}0`);
                }
            }, 1000); // Adjust the delay as needed

            setTimeoutId(newTimeoutId);
        }
    };

    return ( 
        <div className="mb-4">
            <input
                type="text"
                name="amount"
                placeholder="Amount"
                value={amount}
                onChange={handleChange}
                className="w-full p-2  border-b-2 border-gray-700 text-center font-[1.5rem] focus:outline-none"
            />
        </div>
     );
}

export default Amount;