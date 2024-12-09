import { getTransactionsByType, getUser } from "@/lib/queries";
import Pnl from "./Pnl";
import HamburgerMenu from "../HamburgerMenu";

export const revalidate = 60;

async function MobileHero() {
    const user = await getUser();
    const income = await getTransactionsByType('income');
    const expenses = await getTransactionsByType('expense');
    
    const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0);
    const netIncome = (totalIncome - totalExpenses).toLocaleString();

    

    // console.log(typeof netIncome); 
    
    
    
    return ( 
        <div className="">

            <div className="mobile-container relative h-full">

                <div className="pt-5 text-white">
                    <header className="flex justify-between items-center">
                        <h1 className="">Hello {user?.first_name}</h1>
                        <HamburgerMenu />
                    </header>

                    <div className="mt-4 flex justify-between items-center">
                        {/* Net Budget */}
                       <div>
                            <span className="text-sm">Net Budget</span>  
                            <br /> 
                            <span className={`font-bold text-3xl ${netIncome < 0 ? 'text-error' : ''}`}>£{netIncome}</span>
                       </div>
                       {/* Divider */}
                       <div className="w-[2px] h-[62px] rotate-[22deg] bg-secondary"></div>
                       {/* Acutal Balance */}
                       <div>
                            <span className="text-sm">Actual Balance</span>  
                            <br /> 
                            <span className={`font-bold text-3xl ${netIncome < 0 ? 'text-error' : ''}`}>£{netIncome}</span>
                       </div>
                    </div>

                </div>

                <Pnl />

                {/* <ModalServerWrapper /> */}
            </div>

        </div>
     );
}

export default MobileHero;