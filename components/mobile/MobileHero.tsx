import { getUser } from "@/lib/queries";
import Modal from "../Modal";
import Pnl from "./Pnl";

export const revalidate = 60;

async function MobileHero() {
    const user = await getUser();
    
    return ( 
        <div className=" h-[26vh] bg-primary">

            <div className="mobile-container relative h-full">

                <div className="pt-5 text-white">
                    <h1 className="">Hello {user.first_name}</h1>
                    <div className="mt-2">
                        <span className="font-bold text-3xl">£600</span>
                        <br /> 
                        <span className="text-sm">remaining this month</span>  
                    </div>
                </div>

                <Pnl />

                <Modal />
            </div>

        </div>
     );
}

export default MobileHero;