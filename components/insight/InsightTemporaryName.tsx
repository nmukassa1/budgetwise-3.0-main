import Header from '@/components/common/Header';
import CircleDesign from '@/components/common/CircleDesign';
import Pnl from '@/components/common/Pnl';
import SectionSummary from '../common/SectionSummary';
import SectionLayout from '../common/SectionLayout';
import { useInsight } from '@/lib/context/InsightContext';


export default function InsightTempoaryName(){
    const {budgetSummary} = useInsight()
    return (
        <SectionLayout>
            <Header>
                Budgeting <br />
                and Spending <br />
                Insights
            </Header>
            <CircleDesign />
            <Pnl /> 
            <SectionSummary title={`Balance ${budgetSummary}`} />
        </SectionLayout>
    )
}