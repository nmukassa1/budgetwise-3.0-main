"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { potSchema, transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";

export async function createNewPot(state: object, formData: FormData) {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
    }
    console.log(Number(formData.get("goal")));

    // Validate fields
    const validation = potSchema.safeParse({
        name: formData.get("name"),
        goal: Number(formData.get("goal")),
    });

    // Validation failed
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors,
        };
    }

    // Validation passed
    const { name } = validation.data;
    const goal = Number(formData.get("goal"));

    try {
        // Create new category
        const { data: pot, error } = await supabase
            .from("pots")
            .insert({
                name,
                target_amount: Number(goal),
                user_id: session.userId,
            })
            .select("*");

        if (error) {
            console.log(error);
            return {
                errors: {
                    general: "An error occurred while creating the pot",
                },
            };
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path

        return {
            results: { message: "Pot created successfully", data: pot },
        };
        
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

export async function createTransaction(state: object, formData: FormData) {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
    }

    // console.log(formData);
    

    // Validate fields
    const validation = transactionSchema.safeParse({
        name: formData.get("name"),
        category_type: formData.get("category_type"),
        amount: Number(formData.get("transaction_amount")),
        repeat: (formData.get("repeat") === 'true' ? true : false),
        category: formData.get("category")
    });

    // // Validation failed
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors,
        };
    }

    // // Validation passed
    const { name, category_type, amount, repeat } = validation.data;
    console.log(validation.data);
    

    const transaction_date = new Date();
    

    try {
        // Create new category
        const { data: category, error } = await supabase
            .from("transactions")
            .insert({
                name,
                amount: Number(amount),
                is_recurring: repeat,
                transaction_date,
                category_type: category_type,
                user_id: session.userId,
            })
            .select("*");

        if (error) {
            console.log(error);
            return {
                errors: {
                    general: "An error occurred while creating the transaction",
                },
            };
        }

        

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path

        console.log('Transaction created successfully');
            return{
                results: {message: 'Transaction created successfully', data: category}
            }

    } catch (error) {
        console.log(error);
        return {
            errors: {
                general: "An unexpected error occurred",
            },
        };
    }
}