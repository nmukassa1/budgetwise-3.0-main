import { getTransactionsByType, getUser } from "@/lib/queries";
import Pnl from "./Pnl";
import ModalServerWrapper from "../crud-modal/ModalServerWrapper";

export const revalidate = 60;

async function MobileHero() {
    const user = await getUser();
    const income = await getTransactionsByType('income');
    const expenses = await getTransactionsByType('expense');
    
    const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const netIncome = (totalIncome - totalExpenses).toLocaleString();

    // console.log(typeof netIncome);
    
    
    
    return ( 
        <div className=" h-[26vh] bg-primary">

            <div className="mobile-container relative h-full">

                <div className="pt-5 text-white">
                    <h1 className="">Hello {user.first_name}</h1>
                    <div className="mt-2">
                        <span className={`font-bold text-3xl ${netIncome < 0 ? 'text-error' : ''}`}>£{netIncome}</span>
                        <br /> 
                        <span className="text-sm">remaining this month</span>  
                    </div>
                </div>

                <Pnl totalIncome={totalIncome} totalExpense={totalExpenses} />

                {/* <Modal /> */}
                <ModalServerWrapper />
            </div>

        </div>
     );
}

export default MobileHero;