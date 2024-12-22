"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";
import createEntity from "./createEntity";
import { z } from "zod";
import updateEntity from "./updateEntity";
import createTransactionEntity from "./createTransactionEntity";
import {State} from '@/components/Form';
  
  export async function createNewPot(currentState: State, formData: FormData) {
    console.log('Create new pot formData: ', formData);
    
    return createEntity(
      "pots", // Table name
      z.object({
        name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
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