// import { LinearProgress } from "@mui/material";
import CategoryHeader from "../CategoryHeader";
import Card from "../Card";
import BudgetButtons from "./BudgetButtons";
import RenderBudgetItems from "./RenderBudgetItems";
import { getBudgets } from "@/lib/queries";
import { BudgetProvider } from "./BudgetProvider";




export default async function Budget() {   

    const budgets = await getBudgets() || [];

    return(
        <BudgetProvider budgets={budgets}>
            <Card className="text-white">
                <CategoryHeader categoryName='Budget' />

                <div className="">
                    <BudgetButtons />

                    {budgets.length === 0 && (
                        <div className="w-full h-[100px] mt-4 grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                            <p className="text-gray-500">No budgets created</p>
                        </div>
                    )}

                    <RenderBudgetItems />
                    
                </div>

            </Card>
        </BudgetProvider>
    )
}