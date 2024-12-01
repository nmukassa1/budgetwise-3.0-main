
function Pnl({totalIncome, totalExpense}) {
    return ( 
        <div className="grid gap-4 py-4">
            <Item icon="£" title="Income" budgetAmount={2000} actualAmount={2100} />
            <Item icon="-" title="Expenses" budgetAmount={500} actualAmount={700} />
        </div>
     );
}

export default Pnl;

function Item({icon, title, budgetAmount, actualAmount} : {icon: string, title: string, budgetAmount: number, actualAmount: number}) {
    return (
        <div className="flex items-center px-4 py-1 bg-secondary rounded-full text-[.8rem]">
            <div className="icon">{icon}</div>
            <div className="title ml-4">{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</div>
            <div className="flex items-center gap-10 mx-auto">
                <div className="budgetAmount text-center">
                    Budgeted
                    <br />
                    {icon === '-' && ('-')}£{budgetAmount.toLocaleString()}
                </div>
                <div className="actualAmount text-center">
                    Actual
                    <br />
                    {icon === '-' && ('-')}£{actualAmount.toLocaleString()}
                </div>
            </div>
        </div>
    )
}