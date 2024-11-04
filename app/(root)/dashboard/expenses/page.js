import { Add, Delete, Edit, Remove } from "@mui/icons-material";
import Card from "@components/Card";
import TotalCard from "@components/TotalCard";
import TransactionItem from "@components/TransactionItem";
import Analytics from "@components/Analytics";

const transactions = [
    {name: 'Rent', amount: 1700},
    {name: 'Utilities', amount: 100},
    {name: 'Groceries', amount: 200},
    {name: 'Transport', amount: 50},
    {name: 'Entertainment', amount: 50},
    {name: 'Miscellaneous', amount: 0},
]

export default function Expenses(){
    return(
        <div>
            <Card className="grid place-content-center bg-secondary">
                <TotalCard name={"Expenses"} amount={2000} />
            </Card>

           <div className="grid grid-cols-2 gap-4 mt-4">
                <Card className="bg-secondary">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="flex item-center">
                                <TransactionItem name={transaction.name} amount={transaction.amount} />
                            </div>
                        ))}
                </Card>

                <Analytics />
           </div>
        </div>
    ) 
}