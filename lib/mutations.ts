"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { potSchema, transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";
import {PotType} from './types';

interface Errors {
    name?: string[];
    goal?: string;
    general?: string;
  }

export async function createNewPot(previousState: unknown, formData: FormData): Promise<
| { errors: Errors; results?: undefined }
| { results: { message: string; data: PotType[] }; errors?: undefined }
> {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
    }
    // console.log(Number(formData.get("goal")));

    // Validate fields
    const validation = potSchema.safeParse({
        name: formData.get("name") as string,
        goal: Number(formData.get("goal")) as number,
    });

    // Validation failed
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors
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
        amount: Number(formData.get("transaction_amount")),
        category_type: formData.get("category_type"),
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

interface potTransaction {
    name: string,
    amount: string,
    repeat: boolean,
    potId: number,
}

export async function createPotTransaction(formData: potTransaction) {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
    }

    // console.log(formData);

    const transaction_date = new Date();
    
    const { name, amount, repeat, potId } = formData;


    try {
        // Create new category
        const { data, error } = await supabase
            .from("transactions")
            .insert({
                name,
                amount: Number(amount),
                is_recurring: repeat,
                transaction_date,
                category_type: 'pot',
                user_id: session.userId,
                pot_id: potId
            })
            .select("*");

        if (error) {
            console.log(error);
            return {
                message: "An error occurred while creating the transaction",
                error: error
            };
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path

        console.log('Transaction created successfully');
            return{
                results: {message: 'Transaction created successfully', data}
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

export async function deletePot(id: number){
    const session = await verifySession();
    if(!session?.userId){
        console.log('No session found');
    }

    // console.log(id);
    

    try{
        //Delete category
        const {data, error} = await supabase.from('pots').delete().match({
            id: id,
            user_id: session.userId
        }).select('*');

        if(error){
            console.log(error);
            return {
                errors: {
                    general: 'An error occurred while deleting the pot'
                }
            }
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path
        console.log('Pot deleted successfully');    
        return data;
    } catch(error){
        console.log(error);
    }
}

interface EditFormData{
    name: string,
    amount: number
}

export async function editPot(formData: EditFormData, id: number){
    const session = await verifySession();
    if(!session?.userId){
        console.log('No session found');
    }

    console.log(formData);
    const {name, amount} = formData;
    

    try{
        //Edit pot
        const {data, error} = await supabase.from('pots').update({
            name,
            target_amount: amount
        }).match({
            id: id,
            user_id: session.userId
        }).select('*');

        if(error){
            console.log(error);
            return {
                errors: {
                    general: 'An error occurred while editing the pot'
                }
            }
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard"); // Update this to the relevant path
        console.log('Pot edited successfully');    
        return data;
    } catch(error){
        console.log(error);
    }
}