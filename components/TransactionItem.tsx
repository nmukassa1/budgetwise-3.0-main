import { ReactNode } from "react";

interface TransactionItemProps {
    icon?: ReactNode;
    name?: string;
    amount: number;
    customClass?: string;
}

export default function TransactionItem({ icon, name = '', amount, customClass = '' }: TransactionItemProps) {
    return (
        <div className={`transaction-item py-4 flex flex-grow items-center text-primary ${customClass}`}>
            <div className="transaction-icon h-[10px] w-[10px] rounded-lg bg-blue-400"></div>
            <div className="transaction-name ml-4">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div className={`transaction-amount ml-auto`}>£{amount}</div>
        </div>
    );
}