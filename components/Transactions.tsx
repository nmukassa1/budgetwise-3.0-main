"use client"
import Category from "./Category";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
    return (
        <Category categoryName='Transactions'>
            <div>
                <TransactionItem name='Rent' amount={1700.00} />
                <TransactionItem name='Utilities' amount={100.00} />
                <TransactionItem name='Utilities' amount={100.00} />
            </div>
        </Category>
    );
}

