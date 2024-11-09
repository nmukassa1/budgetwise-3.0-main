"use client"
import Category from "./Category";
import TransactionContainer from "./TransactionContainer";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
    return (
        <Category categoryName='Transactions'>
            <TransactionContainer />
        </Category>
    );
}

