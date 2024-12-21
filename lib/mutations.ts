"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";
// import {BudgetType, PotType} from './types';
import createEntity from "./createEntity";
import { z } from "zod";
import updateEntity from "./updateEntity";
import createTransactionEntity from "./createTransactionEntity";


  export async function createNewPot(previousState: unknown, formData: FormData) {
    return createEntity(
        "pots", // Table name
        z.object({
            name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
            target_amount: z.number().optional(),
        }), // Validation schema
        formData,
        (formData) => ({
            name: formData.get("name") as string,
            target_amount: Number(formData.get("target_amount")),
        }), // Map FormData to fields
        "Pot created successfully" // Success message
    );
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
    console.log(formData);
    
   return createTransactionEntity(
        "transactions", // Table name
        transactionSchema,
        formData,
        (formData) => ({
            name: formData.get("name") as string,
            amount: Number(formData.get("amount")),
            is_recurring: formData.get("repeat") === "true",
            category_type: formData.get("category_type") as string,
            pot_id: Number(formData.get("pot_id")),
        }),
        "Transaction created successfully"
    );
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


export async function createNewBudget(previousState: unknown, formData: FormData) {
    return createEntity(
        "budget", // Table name
        z.object({
            name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
            budget_amount: z.number().optional(),
        }), // Validation schema
        formData,
        (formData) => ({
            name: formData.get("name") as string,
            budget_amount: Number(formData.get("budget_amount")),
        }), // Map FormData to fields
        "Budget created successfully" // Success message
    );
}

export async function editPot(previousState: unknown, formData: FormData){
    return updateEntity(
        "pots", // Table name
        z.object({
            name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
            target_amount: z.number().optional(),
        }), // Validation schema
        formData,
        (formData) => ({
            name: formData.get("name") as string,
            target_amount: Number(formData.get("target_amount")),
        }), // Map FormData to fields

        "Pot edited successfully" // Success message
    );
}