import TransactionItem from "./TransactionItem";

function TransactionContainer() {
    return ( 
        <div className="flex flex-col gap-4 py-2 max-h-[250px] overflow-scroll">
            <TransactionItem name='Rent' amount={1700.00} budget={1700.00} />
            <TransactionItem name='Utilities' amount={100.00} budget={100.00} />
        </div>
     );
}

export default TransactionContainer;