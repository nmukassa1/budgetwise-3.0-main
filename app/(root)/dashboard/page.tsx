
import ScrollIndicator from '@/components/common/ScrollIndicator';
import PotServerComponent from '@/components/pots/PotServerComponent';
import InsightServerComponent from '@/components/insight/InsightServerComponent';
import BudgetsServerComponent from '@/components/budget/BudgetServerComponent';

const Dashboard  = async () => {
   

    return (
        <div className="h-[85vh] snap-y snap-mandatory overflow-scroll md:hidden relative">
           <InsightServerComponent />
           <PotServerComponent />
           <BudgetsServerComponent />
           <ScrollIndicator />
        </div>
    );
};

export default Dashboard;
