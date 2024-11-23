"use client"

import { TransactionsProvider } from "@/lib/context/TransactionContext";
import TransactionsList from "./TransactionsList";

function TransactionContainer({transactions}) {
    return ( 
        <TransactionsProvider transactions={transactions}>
          <TransactionsList />
        </TransactionsProvider>
     );
}

export default TransactionContainer;