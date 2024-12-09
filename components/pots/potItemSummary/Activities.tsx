import CategoryHeader from "@/components/CategoryHeader";
import { usePot } from "@/lib/context/PotContext";
import { getTransactionsById } from "@/lib/queries";
import { Card } from "@mui/material";
import { useEffect, useState } from "react";

function Activities({reFetchTransactions, setReFetchTransactions}) {

    const potItem = usePot()

    const [transactionContainerHeight, setTransactionContainerHeight] = useState('max-h-[135.5px]')
    const [transactions, setTransactions] = useState<Array<any>>([])

    useEffect(() => {
        async function fetchTransactions(){
             const transactions = await getTransactionsById(potItem.id)
             transactions && transactions.length > 0 ? setTransactions(transactions) : []
         }
         fetchTransactions()
         setReFetchTransactions(false)
     }, [potItem.id, reFetchTransactions])


    return ( <Card className="w-full bg-primary p-4 rounded-md mt-8 text-white">
        <CategoryHeader categoryName="Activity"  />

        <div className="mt-4">
            {transactions.length === 0 && <p>No transactions found</p>}
            <ul className={`overflow-hidden ${transactionContainerHeight}`}>
                {transactions?.map((transaction, index) => (
                    <li key={index} className="flex items-center justify-between py-4 border-b">
                        <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                        <div>{transaction.amount < 0 ? `You've withdrew` : `You've added `}</div>
                        <div className="text">{transaction.amount}</div>
                    </li>
                ))}
            </ul>
            <button onClick={() => {transactionContainerHeight !== 'h-auto' ? setTransactionContainerHeight('h-auto') : setTransactionContainerHeight('max-h-[135.5px]')}} className="mt-4">{transactionContainerHeight === 'h-auto' ? 'Close' : 'See all'}</button>
        </div>
    </Card> );
}

export default Activities;