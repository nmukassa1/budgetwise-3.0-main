export default function TotalSaved({pots}){
    return(
        <div className="flex items-center justify-between text-sm">
            <div id="total-saved">
                Total Saved: £{pots.reduce((acc, pot) => acc + pot.current_amount, 0).toLocaleString()}
            </div>
            <div className="status flex gap-2">
                <button className="bg-gray-500 rounded-full py-1 px-2">Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
