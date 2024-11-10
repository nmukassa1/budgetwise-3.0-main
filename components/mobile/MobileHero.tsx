import Modal from "../Modal";
import MobilePnl from "./MobilePnl";

function MobileHero() {
    return ( 
        <div className=" h-[26vh] bg-primary">
        {/* <div className=" h-[26vh] hero-gradient"> */}

            <div className="mobile-container relative">

                <div className="pt-5 text-white">
                    <h1 className="">Hello Nyah</h1>
                    <div className="mt-2">
                        <span className="font-bold text-3xl">£600</span>
                        <br /> 
                        <span className="text-sm">remaining this month</span>     
                    </div>
                </div>

                <MobilePnl />

                <Modal />
            </div>

        </div>
     );
}

export default MobileHero;