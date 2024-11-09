import TransactionItem from "./TransactionItem";

function TransactionContainer() {
    return ( 
        <div>
            <TransactionItem name='Rent' amount={1700.00} />
            <TransactionItem name='Utilities' amount={100.00} />
            <TransactionItem name='Utilities' amount={100.00} />
        </div>
     );
}

export default TransactionContainer;