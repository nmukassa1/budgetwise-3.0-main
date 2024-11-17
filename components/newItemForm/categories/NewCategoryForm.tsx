import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { categories } from "../Transactions/CategoryInput";

function NewCategoryForm() {
    const [selectedCategory, setSelectedCategory] = useState("income");

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
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            <option value="pots">Pots</option>
                        </select>
                    </div>

                    {selectedCategory !== 'income' && (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="budgetAmount">Budget Amount</label>
                            <input type="number" name="budgetAmount" id="categoryColor" className="border border-gray-700 rounded-md p-2" />
                        </div>
                    )}

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

            {categories && categories.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-primary">Categories</h2>
                    <ul className="flex flex-col gap-1">
                        {categories.map((category) => (
                            <li
                                key={category.name}     
                                className="flex items-center gap-2 p-2 rounded-md bg-secondary justify-between"
                            >
                                <div className="flex">
                                    <span className="inline-flex items-center justify-center rounded-full h-[22px] w-[22px] p-[14px]" style={{ backgroundColor: category.color }}>
                                        {category.icon}
                                    </span>
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <span>{category.name}</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <form action="">
                                        <button><Delete /></button>
                                    </form>
                                    <form action="">
                                        <button><Edit /></button>
                                    </form>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
     );
}

export default NewCategoryForm;