import { deleteCategory } from "@/lib/mutations";
import { Delete, Edit } from "@mui/icons-material";

interface Category {
    id: string;
    name: string;
    color: string;
    icon: JSX.Element;
    budget_amount: number;
}
export default function CategoryList({categories}) {
    return (
        <ul className="flex flex-col gap-3 mt-3">
            {categories.map((category: Category) => (
        <li
            key={category.id}
            className="flex items-center gap-2 p-2 rounded-md  justify-between bg-primary text-white"
        >
            <div className="flex items-center w-full">
                <span
                    className="inline-flex items-center justify-center rounded-full h-[10px] w-[10px] p-1 bg-secondary"
                    // style={{ backgroundColor: category.color }}
                >
                    {category.icon}
                </span>
                <div className="flex items-center ml-2">
                    <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}</span>
                </div>

                <div className="mx-auto">
                    <span>{category.budget_amount}</span>
                </div>
            </div>

            <div className="flex gap-3">
               <form onSubmit={async (e) => {
                   e.preventDefault();
                   await deleteCategory(category.id);
               }}>
                <button type="submit">
                        <Delete />
                    </button>
               </form>
                <button>
                    <Edit />
                </button>
            </div>
        </li>
    ))}
        {/* {categories && <CategoryList categories={categories} />} */}
    </ul>
    );
}
