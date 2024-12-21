import Budget from "@/components/budget/Budget";
import Footer from "@/components/Footer";
import MobileHero from "@/components/mobile/MobileHero";
import PotServerComponent from "@/components/pots/PotServerComponent";
import { getBudgets, getPots, getTransactionsByType, getUser } from "@/lib/queries";

const Dashboard  = async () => {
    const [user, income, expenses, pots, budgets] = await Promise.all([
        getUser(),
        getTransactionsByType('income'),
        getTransactionsByType('expense'),
        getPots(),
        getBudgets()
      ]);
    const potsList = pots || [];
    const budgetsList = budgets || [];

    const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0);
    const netIncome = totalIncome - totalExpenses;

    return (
        <div className="h-full md:hidden">
            <MobileHero user={user} netIncome={netIncome} />
            <div className="mobile-container flex flex-col gap-4">
                <PotServerComponent pots={potsList} />
                <Budget budgets={budgetsList} />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
