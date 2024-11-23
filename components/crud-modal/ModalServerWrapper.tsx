import { getCategories } from "@/lib/queries";
import Modal from "./Modal";

export const revalidate = 60;

async function ModalServerWrapper() {
    const categories = await getCategories();
    
    return ( 
        <Modal categories={categories} />
     );
}

export default ModalServerWrapper;