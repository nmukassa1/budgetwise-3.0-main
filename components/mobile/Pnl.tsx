function Pnl({totalIncome, totalExpense}) {
    return ( 
        <div className="bg-secondary rounded-md flex items-center justify-center gap-8 text-sm absolute w-[-webkit-fill-available] left-0 bottom-[-16px] shadow-lg py-1">
            <div className="">
                Income 
                <br />
                £{totalIncome > 0 ? totalIncome : 0} 
            </div>
            <div className="divider-y w-[1px] h-[30px] bg-primary"></div>
            <div className="">
                Expenses 
                <br />
                £{totalExpense > 0 ? totalExpense : 0}
            </div>
        </div>
     );
}

export default Pnl;