import Budget from "@/components/Budget";
import Footer from "@/components/Footer";
import MobileHero from "@/components/mobile/MobileHero";
import PotServerComponent from "@/components/pots/PotServerComponent";
import { getPots, getTransactionsByType, getUser } from "@/lib/queries";

const Dashboard  = async () => {
    const user = await getUser();
    const income = await getTransactionsByType('income');
    const expenses = await getTransactionsByType('expense');
    const pots = (await getPots()) || []; // Fetch data here
    const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0);
    const netIncome = totalIncome - totalExpenses;

    return (
        <div className="h-full md:hidden">
            <MobileHero user={user} netIncome={netIncome} />
            <div className="mobile-container flex flex-col gap-4">
                <PotServerComponent pots={pots} />
                <Budget />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
