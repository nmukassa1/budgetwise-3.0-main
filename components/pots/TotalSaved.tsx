interface Pot {
    current_amount: number;
}

interface TotalSavedProps {
    pots: Pot[];
    setIsCompleted: Function;
    isCompleted: boolean;
}

export default function TotalSaved({pots, isCompleted ,setIsCompleted}: TotalSavedProps){

    return(
        <div className="flex items-center justify-between text-sm">
            <div id="total-saved">
                Total Saved: £{pots.reduce((acc, pot) => acc + pot.current_amount, 0).toLocaleString()}
            </div>
            <div className="status flex gap-2">
                <button onClick={() => setIsCompleted(false)} className={isCompleted === false ? 'bg-gray-500 rounded-full py-1 px-2' : ''}>Active</button>
                <button onClick={() => setIsCompleted(true)} className={isCompleted === true ? 'bg-gray-500 rounded-full py-1 px-2' : ''}>Completed</button>
            </div>
        </div>
    )
}
