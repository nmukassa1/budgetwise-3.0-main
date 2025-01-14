import { useEffect, useState } from "react";
import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import { getTransactionsMonthByType } from "@/lib/queries";
import { TransactionType } from "@/lib/types";


export default function AllExpenseTransactions() {

    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    const [transactionContainerHeight, setTransactionContainerHeight] = useState('max-h-[135.5px]');

    useEffect(() => {
        async function fetchTransactions() {
            const results = await getTransactionsMonthByType('expense');

            // console.log(results);
            
            
            if(results) {
                setTransactions(results);
            }
        }

        fetchTransactions()
        
    }, [])

    return (
        <Card className="w-full p-4 mt-8 border-2 border-black rounded-lg">
            <CategoryHeader categoryName="Activity" textColor="text-black" />

            <div className="mt-4">
                {transactions.length === 0 && <p>No transactions found</p>}
                <ul className={`overflow-hidden ${transactionContainerHeight}`}>
                    {transactions.map((transaction, index) => (
                        <li key={index} className="flex items-center py-4 ">
                            <div className="icon h-[30px] w-[30px] bg-black mr-4"></div>
                            {/* <div>{transaction.amount < 0 ? `You've withdrew` : `You've added `}</div> */}
                            <div>{transaction.name}</div>
                            <div className="text ml-auto">{transaction.amount}</div>
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