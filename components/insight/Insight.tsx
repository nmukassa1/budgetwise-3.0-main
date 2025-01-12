"use client"
import { InsightProvider } from '@/lib/context/InsightContext';
import { BudgetType, TransactionType } from '@/lib/types';
import InsightTempoaryName from './InsightTemporaryName';

function Insight({budgets, transactions} : {budgets: BudgetType[], transactions: TransactionType[]}) {


    return ( 
        <InsightProvider budgets={budgets} transactions={transactions}>
            <InsightTempoaryName />
        </InsightProvider>
    );
}

export default Insight;