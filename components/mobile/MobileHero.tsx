import HamburgerMenu from "../HamburgerMenu";
import Pnl from "./Pnl";

interface MobileHeroProps {
    user: { first_name: string };
    netIncome: number;
}

const MobileHero: React.FC<MobileHeroProps> = ({ user, netIncome }) => {
    return (
        <div className="">
            <div className="mobile-container relative h-full">
                <div className="pt-5 text-white">
                    <header className="flex justify-between items-center">
                        <h1 className="">Hello {user.first_name}</h1>
                        <HamburgerMenu />
                    </header>

                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <span className="text-sm">Net Budget</span>
                            <br />
                            <span className={`font-bold text-3xl ${netIncome < 0 ? 'text-error' : ''}`}>
                                £{netIncome.toLocaleString()}
                            </span>
                        </div>
                        <div className="w-[2px] h-[62px] rotate-[22deg] bg-secondary"></div>
                        <div>
                            <span className="text-sm">Actual Balance</span>
                            <br />
                            <span className={`font-bold text-3xl ${netIncome < 0 ? 'text-error' : ''}`}>
                                £{netIncome.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
                <Pnl />
            </div>
        </div>
    );
};

export default MobileHero;
