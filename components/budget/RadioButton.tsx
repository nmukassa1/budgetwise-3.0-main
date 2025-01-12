import { BudgetType } from "@/lib/types";
import Input from "../form/Input";

interface RadioButtonProps {
    budget: BudgetType,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    budgetSelected: string | null,
}

function RadioButton({budget, handleChange, budgetSelected} : RadioButtonProps) {


    return ( 
        <div>
            <label 
                htmlFor={budget.id.toLocaleString()}
                className={`p-2 flex items-center gap-4 focus:outline-none w-full h-full border-b-2 border-b-black`}>
                <div  
                    className={`h-[20px] w-[20px] rounded-full border-2`} 
                    style={
                        {
                            borderColor: budget.bg_color,
                            backgroundColor: budgetSelected === budget.id.toLocaleString() ? budget.bg_color : 'transparent',
                        }
                    }></div>
                <h1 className="w-full">
                    {budget.name}
                </h1>

                {/* Circle */}
                {/* <div className="h-[13px] w-[13px] rounded-full border-[1px] border-white">
                </div> */}

            </label>

            {/* Input is hidden */}
            <Input handleChange={handleChange} value={budget.id} name="budget_id" placeholder={budget.name} type="radio" id={budget.id.toString()} className='hidden' />
        </div>
     );
}

export default RadioButton;