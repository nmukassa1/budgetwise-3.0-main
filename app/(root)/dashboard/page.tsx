import Budget from "@/components/budget/Budget";
import Footer from "@/components/Footer";
import MobileHero from "@/components/mobile/MobileHero";
import PotServerComponent from "@/components/pots/PotServerComponent";
import {getTransactionsByType, getUser } from "@/lib/queries";

const Dashboard  = async () => {
    const [user, income, expenses] = await Promise.all([
        getUser(),
        getTransactionsByType('income'),
        getTransactionsByType('expense'),
      ]);
    

    const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0);
    const netIncome = totalIncome - totalExpenses;

    return (
        <div className="h-full md:hidden">
            <MobileHero user={user} netIncome={netIncome} />
            <div className="mobile-container flex flex-col gap-4">
                <PotServerComponent  />
                <Budget  />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
