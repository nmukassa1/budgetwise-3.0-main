import { getCategories } from "@/lib/queries";
import { Delete, Edit } from "@mui/icons-material"

async function ModifyCategory({categories} : {categories: any}) {

    // const categoriesTest = await getCategories();
    // if(categoriesTest){
    //     console.log(categoriesTest);
    // }

    return ( 
        <>
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

export default ModifyCategory;