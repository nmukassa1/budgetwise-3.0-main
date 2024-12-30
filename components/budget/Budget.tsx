// import { LinearProgress } from "@mui/material";
import CategoryHeader from "../CategoryHeader";
import Card from "../Card";
import BudgetButtons from "./BudgetButtons";
import { BudgetType } from "@/lib/types";
import RenderBudgetItems from "./RenderBudgetItems";

interface BudgetProps {
budgets: BudgetType[],
}


export default function Budget({budgets} : BudgetProps) {   


    return(
        <Card className="text-white">
            <CategoryHeader categoryName='Budget' />

            <div className="">
                <BudgetButtons budgets={budgets} />

                {budgets.length === 0 && (
                    <div className="w-full h-[100px] mt-4 grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                        <p className="text-gray-500">No budgets created</p>
                    </div>
                )}

                <RenderBudgetItems budgets={budgets} />
                
            </div>

        </Card>
    )
}