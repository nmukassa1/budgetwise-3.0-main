"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { categorySchema } from "./validationSchema";

export async function createNewCategory(state: object, formData: FormData){
    const session = await verifySession()
    if(!session?.userId){
        console.log('No session found');
    }
    console.log(formData);
    
    //Validate fields
    const validation = categorySchema.safeParse({
        name: formData.get('name'),
        categoryType: formData.get('categoryType'),
        budgetAmount: Number(formData.get('budgetAmount'))
    });

    //Validation failed
    if(!validation.success){
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors
        }
    }

    //Validation passed
    const { name, categoryType, budgetAmount } = validation.data;

    try{
        //Create new category
        const {data: category, error} = await supabase.from('categories').insert({
            name,
            category_type: categoryType,
            budget_amount: Number(budgetAmount),
            user_id: session.userId
        }).select('*');

        if(error){
            console.log(error);
            
            return {
                errors: {
                    general: 'An error occurred while creating the category'
                }
            }
            // throw error;
        }

        return category;
    } catch(error){
        console.log(error);
    }
}