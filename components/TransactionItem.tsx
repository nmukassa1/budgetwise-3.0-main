import { ReactNode } from "react";

interface TransactionItemProps {
    icon?: ReactNode;
    name?: string;
    amount: number;
    budget: number;
    className?: string;
}

export default function TransactionItem({ transaction, className = '' }: TransactionItemProps) {
    const { name, amount } = transaction;
    return (
        <li className={`transaction-item pb-4 flex shrink-0  items-center text-primary ${className}`}>
            <div className="transaction-icon h-[10px] w-[10px] rounded-full bg-blue-400"></div>
            <div className="transaction-name ml-4">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <div className={`transaction-amount ml-auto`}>{transaction.category_type === 'income' ? `+£${transaction.amount}` : `-£${transaction.amount}`}</div>
        </li>
    );
}