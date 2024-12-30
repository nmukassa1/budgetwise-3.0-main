import { useEffect, useState } from "react";
import Card from "./Card";
import CategoryHeader from "./CategoryHeader";
import { getTransactionsById } from "@/lib/queries";
import { TransactionType } from "@/lib/types";

interface TransactionsProps {
    id: number,
    match: string
}

export default function Transactions({id, match} : TransactionsProps) {

    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    const [transactionContainerHeight, setTransactionContainerHeight] = useState('max-h-[135.5px]');

    useEffect(() => {
        async function fetchTransactions() {
            const results = await getTransactionsById(id, match);

            console.log(results);
            
            
            if(results) {
                setTransactions(results);
            }
        }

        fetchTransactions()
        
    }, [])

    return (
        <Card className="w-full border-2 p-4 rounded-md mt-8 text-white">
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

                {transactions.length > 0 && (
                    <button onClick={() => { 
                        if (transactionContainerHeight !== 'h-auto') {
                            setTransactionContainerHeight('h-auto');
                        } else {
                            setTransactionContainerHeight('max-h-[135.5px]');
                        }
                        }} className="mt-4">
                        {transactionContainerHeight === 'h-auto' ? 'Close' : 'See all'}
                    </button>
                )}

            </div>
        </Card>
    );
}