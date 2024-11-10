import CategoryHeader from "../CategoryHeader";
import TransactionItem from "../TransactionItem";

function Transactions() {
    return ( 
    <div>
        <CategoryHeader categoryName='Transactions' />
        <div className="flex flex-col gap-4 py-2 max-h-[250px] overflow-scroll">
            <TransactionItem name='food' amount={20} className="bg-white h-[50px] rounded-md shadow-md "/>
            <TransactionItem name='food' amount={20} className="bg-white h-[50px] rounded-md shadow-md "/>
        </div>
    </div>
     );
}

export default Transactions;