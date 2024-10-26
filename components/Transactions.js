"use client"
import Category from "./Category";
import TransactionItem from "./TransactionItem";

export default function Transactions(){
    return(
       <Category categoryName='Transactions'>
              <div>
                <TransactionItem transactionName='Rent' transactionAmount='1,700.00' />
                <TransactionItem transactionName='Utilities' transactionAmount='100.00' />
              </div>
       </Category>
    )
}

