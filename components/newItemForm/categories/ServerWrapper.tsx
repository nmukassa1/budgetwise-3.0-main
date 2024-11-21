import { getCategories } from "@/lib/queries";
import ModifyCategory from "./ModifyCategory";

export default async function ServerWrapper() {
    const categories = await getCategories(); // Fetch server-side data
    return <ModifyCategory categories={categories} />;
}