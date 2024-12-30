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
                className={`text-secondary p-2 flex items-center justify-between focus:outline-none w-full h-full ${budgetSelected === budget.id.toLocaleString() ? 'bg-[#474747]' : ''}`}>
                <h1 className="text-center w-full">
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