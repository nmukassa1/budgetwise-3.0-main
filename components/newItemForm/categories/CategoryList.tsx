import { getCategories } from "@/lib/queries";
import { Delete, Edit } from "@mui/icons-material";

interface Category {
    id: string;
    name: string;
    color: string;
    icon: JSX.Element;
}

export default function CategoryList({categories}) {
    // const categories = await getCategories(); // This is server-side

    return (
        <ul className="flex flex-col gap-1">
        {categories.map((category: Category) => (
            <li
                key={category.id}
                className="flex items-center gap-2 p-2 rounded-md bg-secondary justify-between"
            >
                <div className="flex">
                    <span
                        className="inline-flex items-center justify-center rounded-full h-[22px] w-[22px] p-[14px]"
                        style={{ backgroundColor: category.color }}
                    >
                        {category.icon}
                    </span>
                    <div className="flex items-center justify-between w-full ml-2">
                        <span>{category.name}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button>
                        <Delete />
                    </button>
                    <button>
                        <Edit />
                    </button>
                </div>
            </li>
        ))}
    </ul>
    );
}
