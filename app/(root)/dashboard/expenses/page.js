import { Add, Delete, Edit, Remove } from "@mui/icons-material";
import Card from "@components/Card";
import TotalCard from "@components/TotalCard";
import TransactionItem from "@components/TransactionItem";
import Analytics from "@components/Analytics";

const transactions = [
    {transactionName: 'Rent', transactionAmount: 1700},
    {transactionName: 'Utilities', transactionAmount: 100},
    {transactionName: 'Groceries', transactionAmount: 200},
    {transactionName: 'Transport', transactionAmount: 50},
    {transactionName: 'Entertainment', transactionAmount: 50},
    {transactionName: 'Miscellaneous', transactionAmount: 0},
]

export default function Expenses(){
    return(
        <div>
            <Card bgColor="text-secondary" customClass="grid place-content-center">
                <TotalCard name={"Expenses"} amount={2000} />
            </Card>

           <div className="grid grid-cols-2 gap-4 mt-4">
                <Card bgColor="text-secondary">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="flex item-center">
                                <TransactionItem transactionName={transaction.transactionName} transactionAmount={transaction.transactionAmount} customClass="mr-auto" />
                                <div className="ml-auto flex gap-2">
                                    {/* <button className="text-primary"><Add /></button> */}
                                    <button className="text-primary"><Edit /></button>
                                    <button className="text-primary"><Delete /></button>
                                </div>
                            </div>
                        ))}
                </Card>

                <Analytics />
           </div>
        </div>
    ) 
}