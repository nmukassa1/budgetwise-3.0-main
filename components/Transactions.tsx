import Category from "./Category";
import TransactionContainer from "./TransactionContainer";
import { getTransactions } from "@/lib/queries";

export default async function Transactions() {
    const transactions = await getTransactions();
    console.log('Transactions:', transactions);
    
    // console.log('Transactions:', transactions);
    

    return (
            <Category categoryName='Transactions'>
                {transactions?.length === 0 && <p>No transactions found</p>}
                <TransactionContainer transactions={transactions} />
            </Category>
    );
}

