"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { categorySchema } from "./validationSchema";

import { revalidatePath } from "next/cache";

export async function createNewCategory(state: object, formData: FormData) {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
    }
    console.log(Number(formData.get("budgetAmount")));

    // Validate fields
    const validation = categorySchema.safeParse({
        name: formData.get("name"),
        categoryType: formData.get("categoryType"),
        budgetAmount: Number(formData.get("budgetAmount")),
    });

    // Validation failed
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors,
        };
    }

    // Validation passed
    const { name, categoryType, budgetAmount } = validation.data;

    try {
        // Create new category
        const { data: category, error } = await supabase
            .from("categories")
            .insert({
                name,
                category_type: categoryType,
                budget_amount: Number(budgetAmount),
                user_id: session.userId,
            })
            .select("*");

        if (error) {
            console.log(error);
            return {
                errors: {
                    general: "An error occurred while creating the category",
                },
            };
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path

        return category;
    } catch (error) {
        console.log(error);
        return {
            errors: {
                general: "An unexpected error occurred",
            },
        };
    }
}


export async function deleteCategory(categoryId: string){
    // console.log(categoryId);
    
    const session = await verifySession();
        if(!session?.userId){
            console.log('No session found');
        }
    
        try{
            //Delete category
            const {data, error} = await supabase.from('categories').delete().match({
                id: categoryId,
                user_id: session.userId
            }).select('*');
    
            if(error){
                console.log(error);
                return {
                    errors: {
                        general: 'An error occurred while deleting the category'
                    }
                }
            }
    
            // Trigger revalidation of a specific path
            revalidatePath("/dashboard"); // Update this to the relevant path
            
            return data;
        } catch(error){
            console.log(error);
        }
}