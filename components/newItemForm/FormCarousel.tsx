import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CategoryForm from "./categories/CategoryForm";
import ModifyCategory from "./categories/ModifyCategory";
import TransactionForm from "./Transactions/TransactionForm";

export default function FormCarousel(){
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
                <TransactionForm />
            </CarouselItem>

            <CarouselItem>
                <CategoryForm />
                <ModifyCategory />
            </CarouselItem>
        </CarouselContent>
        
    </Carousel>
    )
}