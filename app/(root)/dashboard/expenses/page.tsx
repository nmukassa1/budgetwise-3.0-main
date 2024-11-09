import { Add, Delete, Edit, Remove } from "@mui/icons-material";
import Card from "@/components/Card";
import TotalCard from "@/components/TotalCard";
import TransactionItem from "@/components/TransactionItem";
import Analytics from "@/components/Analytics";

interface Transaction {
    name: string;
    amount: number;
}

const transactions: Transaction[] = [
    { name: 'Rent', amount: 1700 },
    { name: 'Utilities', amount: 100 },
    { name: 'Groceries', amount: 200 },
];

export default function Expenses() {
    return (
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
    );
}