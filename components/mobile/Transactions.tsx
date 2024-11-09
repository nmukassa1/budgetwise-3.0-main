import CategoryHeader from "../CategoryHeader";
import TransactionItem from "../TransactionItem";

function Transactions() {
    return ( 
    <div>
        <CategoryHeader categoryName='Transactions' />
        <div className="flex flex-col gap-2 py-2 max-h-[250px] overflow-scroll">
            <TransactionItem name='food' amount={20} className="bg-white h-[50px] rounded-md shadow-md px-2 py-0"/>
            <TransactionItem name='food' amount={20} className="bg-white h-[50px] rounded-md shadow-md px-2 py-0"/>
        </div>
    </div>
     );
}

export default Transactions;