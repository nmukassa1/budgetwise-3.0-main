import { useTransactions } from "@/lib/context/TransactionContext";
import TransactionItem from "./TransactionItem";

export default function TransactionsList(){
    const transactions = useTransactions()
    return(
        <ul className="flex flex-col gap-4 py-2 max-h-[250px] overflow-scroll">
            {transactions.map((transaction) => (
                <TransactionItem key={transaction.transaction_id} transaction={transaction} />
            ))}
            {/* <TransactionItem name={transactions[0]?.name} amount={transactions[0]?.amount} budget={1700.00} />
            <TransactionItem name='Utilities' amount={100.00} budget={100.00} /> */}
        </ul>
    )
}