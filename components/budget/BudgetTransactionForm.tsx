import Input from '@/components/form/Input';
import Title from '@/components/form/Title';
import SubmitButton from '../form/SubmitButton';
import { useEffect } from 'react';
import useCustomForm from '@/lib/hooks/useCustomForm';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { BudgetType } from '@/lib/types';
function BudgetTransactionForm({ setOpenDrawer, budgets }: { setOpenDrawer: (open: boolean) => void, budgets: BudgetType[] }) {
    const {handleChange, formData, result, pending, handleSubmit} = useCustomForm({
        initialFormData: {}
    });

    useEffect(() => {
        console.log(result);
        
        if('status' in result){
          if(result.status === 'success'){
            setOpenDrawer(false);
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [result]);

    return ( 
        <form onSubmit={handleSubmit}>
            <Title title="New Transaction" />
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Input handleChange={handleChange} value={formData.name} name="name" placeholder="Name" type="text" id="name" />
                        <Input handleChange={handleChange} value={formData.amount} name="amount" placeholder="Amount" type="number" id="amount" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className='max-h-[130px] overflow-scroll'>
                            {budgets.map(budget => (
                            <div key={budget.id}>
                                <label htmlFor={budget.id.toLocaleString()}>{budget.name}</label>
                                <Input handleChange={handleChange} value={budget.name} name="budget_id" placeholder={budget.name} type="radio" id={budget.id.toString()} className='hidden' />
                            </div>
                            ))}
                        </div>
                        <SubmitButton pending={pending} /> 
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious>Back</CarouselPrevious>
                <CarouselNext>Next</CarouselNext>
            </Carousel>
        </form>
     );
}

export default BudgetTransactionForm;