import { getCategories } from "@/lib/queries";
import Modal from "./Modal";

async function ModalServerWrapper() {
    const categories = await getCategories();
    // console.log('jghjhg', categories);
    
    return ( 
        <Modal categories={categories} />
     );
}

export default ModalServerWrapper;