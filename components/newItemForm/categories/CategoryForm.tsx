import { categories } from "../Transactions/TransactionCategoryInput";
import ModifyCategory from "./ModifyCategory";

function CategoryForm() {

    return ( 
        <>
            <form action="" className="text-primary rounded-md w-full max-w-md mx-auto" method='get' onSubmit={() => console.log(FormData)}>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoryName">Category Name</label>
                        <input type="text" name="categoryName" id="categoryName" className="border border-gray-700 rounded-md p-2" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoryType">Category Type</label>
                        <select 
                            name="categoryType" 
                            id="categoryType" 
                            className="border border-gray-700 rounded-md p-2"
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            <option value="pots">Pots</option>
                        </select>
                    </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="budgetAmount">Budget Amount</label>
                            <input type="number" name="budgetAmount" id="categoryColor" className="border border-gray-700 rounded-md p-2" />
                        </div>

                    {/* <div className="flex flex-col gap-2">
                        <label htmlFor="categoryColor">Category Color</label>
                        <input type="color" name="categoryColor" id="categoryColor" className="border border-gray-700 rounded-md p-2" />
                    </div> */}

                </div>

                <div className=" mt-4">
                    <button
                        type="submit"
                        className="w-full p-2 rounded-md  border border-gray-700"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <ModifyCategory categories={categories} />
        </>
     );
}

export default CategoryForm;