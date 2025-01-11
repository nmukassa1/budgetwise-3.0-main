import Header from '@/components/common/Header';
import CircleDesign from '@/components/common/CircleDesign';
import Pnl from '@/components/common/Pnl';
import { getBudgets, getTransactions } from '@/lib/queries';
import SectionSummary from '../common/SectionSummary';
import SectionLayout from '../common/SectionLayout';
async function Summary() {

    const [budgets, transactions] = await Promise.all([
        getBudgets(), 
        getTransactions()
    ]);

    let incomeBudget = budgets.filter(budget => budget.type === 'income');
    incomeBudget = incomeBudget.reduce((acc, budget) => acc + budget.budget_amount, 0);

    let expenseBudget = budgets.filter(budget => budget.type === 'expense');
    expenseBudget = expenseBudget.reduce((acc, budget) => acc + budget.budget_amount, 0);

    let actualIncome = transactions.filter(transaction => transaction.category_type === 'income');
    actualIncome = actualIncome.reduce((acc, transaction) => acc + transaction.amount, 0);

    let actualExpense = transactions.filter(transaction => transaction.category_type === 'expense');
    actualExpense = actualExpense.reduce((acc, transaction) => acc + transaction.amount, 0);

    const x  = `${actualIncome - actualExpense} / ${incomeBudget - expenseBudget}`;

    return ( 
        <SectionLayout>
            <div className='flex justify-between'>
                <Header>
                Budgeting <br />
                and Spending <br />
                Insights
                </Header>

                <div id='avatar'>
                    <div className='rounded-full h-[30px] w-[30px] bg-error'></div>
                </div>
            </div>

            <CircleDesign />
            <Pnl actualIncome={actualIncome} budgetedIncome={incomeBudget} actualExpense={actualExpense} budgetedExpense={expenseBudget} />
            <SectionSummary title={`Balance ${x}`} />

            {/* <div className='flex justify-between mt-auto'>
                <Balance budgetedBalance={incomeBudget - expenseBudget} actualBalance={actualIncome - actualExpense} />
               <MutationButton />
            </div> */}
        </SectionLayout>
    );
}

export default Summary;