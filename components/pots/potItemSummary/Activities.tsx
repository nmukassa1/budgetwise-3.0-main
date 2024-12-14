import CategoryHeader from "@/components/CategoryHeader";
import { usePot } from "@/lib/context/PotContext";
import { getTransactionsById } from "@/lib/queries";
import Card  from "@/components//Card";
import { useEffect, useState } from "react";
import { TransactionType } from "@/lib/types";



function Activities({ reFetchTransactions, setReFetchTransactions }: { reFetchTransactions: boolean, setReFetchTransactions: (value: boolean) => void }) {
    const {pot: potItem} = usePot();

    const [transactionContainerHeight, setTransactionContainerHeight] = useState('max-h-[135.5px]');
    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    useEffect(() => {
        async function fetchTransactions() {
            const transactions = await getTransactionsById(potItem.id);
            if (transactions && transactions.length > 0) {
                setTransactions(transactions);
            }
        }
        fetchTransactions();
        setReFetchTransactions(false);
    }, [potItem.id, reFetchTransactions, setReFetchTransactions]);

    return (
        <Card className="w-full bg-primary p-4 rounded-md mt-8 text-white">
            <CategoryHeader categoryName="Activity" />

            <div className="mt-4">
                {transactions.length === 0 && <p>No transactions found</p>}
                <ul className={`overflow-hidden ${transactionContainerHeight}`}>
                    {transactions.map((transaction, index) => (
                        <li key={index} className="flex items-center justify-between py-4 border-b">
                            <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                            <div>{transaction.amount < 0 ? `You've withdrew` : `You've added `}</div>
                            <div className="text">{transaction.amount}</div>
                        </li>
                    ))}
                </ul>
                <button onClick={() => { 
                    if (transactionContainerHeight !== 'h-auto') {
                        setTransactionContainerHeight('h-auto');
                    } else {
                        setTransactionContainerHeight('max-h-[135.5px]');
                    }
                    }} className="mt-4">
                    {transactionContainerHeight === 'h-auto' ? 'Close' : 'See all'}
                </button>
            </div>
        </Card>
    );
}

export default Activities;