import { deleteCategory } from "@/lib/mutations";
import { Delete, Edit } from "@mui/icons-material";

interface Category {
    id: string;
    name: string;
    color: string;
    icon: JSX.Element;
}

function CategoryItem({ categories }: { categories: Category[] }) {
    return ( 
        <>
            {categories.map((category: Category) => (
                <li
                    key={category.id}
                    className="flex items-center gap-2 p-2 rounded-md bg-secondary justify-between"
                >
                    <div className="flex">
                        <span
                            className="inline-flex items-center justify-center rounded-full h-[22px] w-[22px] p-[14px] bg-primary"
                            // style={{ backgroundColor: category.color }}
                        >
                            {category.icon}
                        </span>
                        <div className="flex items-center justify-between w-full ml-2">
                            <span>{category.name}</span>
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
        </>
     );
}

export default CategoryItem;