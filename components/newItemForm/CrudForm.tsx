import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import NewCategoryForm from "./categories/NewCategoryForm";
import NewTransactionForm from "./Transactions/NewTransactionForm";

export default function CrudForm(){
    return(
        <Carousel>
        <div id="carousel-navigator" className="flex items-center gap-4">
            <CarouselPrevious className="block uppercase text-xs tracking-widest w-[-webkit-fill-available]" >Transactions</CarouselPrevious>
            <CarouselNext className="block uppercase text-xs tracking-widest w-[-webkit-fill-available]">
                Categories
            </CarouselNext>
        </div>

        <CarouselContent className="mt-4">
            <CarouselItem>
                <NewTransactionForm />
            </CarouselItem>

            <CarouselItem>
                <NewCategoryForm />

                {/* SHOW ALREADY CREATED CATEGORIES HERE */}
                
            </CarouselItem>
        </CarouselContent>
        
    </Carousel>
    )
}