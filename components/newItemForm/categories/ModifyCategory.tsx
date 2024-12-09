import { Suspense} from "react";
import CategoryList from "./CategoryList";
import { useCategories } from "@/components/crud-modal/context/CategoriesContext";


  function ModifyCategory() {

    const categories = useCategories();

    return ( 
        <div className="mt-4">
            <h2 className="text-primary">Categories</h2>
            {categories && categories.length > 0 ? 
                <Suspense fallback={<p>Loading...</p>}>
                    <CategoryList categories={categories} />
                </Suspense>
            : (
                <p className="text-primary">No categories found </p>
            )}
        </div>
     );
}

export default ModifyCategory;