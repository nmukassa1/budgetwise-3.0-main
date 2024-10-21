import { Add, Delete, Edit, Remove } from "@mui/icons-material";
import Card from "../components/Card";
import TotalSaved from "../components/TotalCard";
import { TransactionItem } from "../components/Transactions";

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
                <TotalSaved name={"Expenses"} amount={2000} />
            </Card>

            <Card bgColor="text-secondary" customClass="mt-4">
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
        </div>
    ) 
}