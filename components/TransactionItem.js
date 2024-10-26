export default function TransactionItem({icon, transactionName = '', transactionAmount, customClass = ''}){
    return(
        <div className="transaction-item py-4 flex flex-grow items-center text-primary">
            <div className="transaction-icon h-[10px] w-[10px] rounded-lg bg-blue-400"></div>
            <div className="transaction-name ml-4">{transactionName.charAt(0).toUpperCase() + transactionName.slice(1)}</div>
            <div className={`transaction-amount ml-auto ${customClass}`}>£{transactionAmount}</div>
        </div>
    )
}