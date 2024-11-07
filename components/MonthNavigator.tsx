import React, { useState } from 'react';

function MonthNavigator() {
    const [currentDate, setCurrentDate] = useState(new Date());

    function getCurrentMonth(date: Date): string {
        return date.toLocaleString('default', { month: 'long' });
    }

    function goToPreviousMonth(): void {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    }

    function goToNextMonth(): void {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    }

    return ( 
        <div className='flex items-center gap-2'>
            <button className="bg-primary text-white px-4 py-2 rounded-lg" onClick={goToPreviousMonth}>Last Month</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">{getCurrentMonth(currentDate)}</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg" onClick={goToNextMonth}>Next Month</button>
        </div>
    );
}

export default MonthNavigator;