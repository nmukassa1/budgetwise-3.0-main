"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { budgetSchema, potSchema, transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";
import createEntity from "./createEntity";
import { z } from "zod";
import updateEntity from "./updateEntity";
import createTransactionEntity from "./createTransactionEntity";
import {NewBudgetFormType, PotFormType, TransactionFormType} from '@/lib/types';
  
  export async function createNewPot(formData: object) {
    return createEntity(
      "pots", // Table name
      potSchema,
      formData,
      (formData) => ({
        name: (formData as PotFormType).name,
        target_amount: (formData as PotFormType).target_amount,
      }), // Map FormData to fields
      "Pot created successfully" // Success message
    );
  }

  export async function createNewBudget(formData: object) {
    return createEntity(
        "budget", // Table name
        budgetSchema, // Validation schema
        formData,
        (formData) => ({
            name: (formData as NewBudgetFormType).name as string,
            budget_amount: Number((formData as NewBudgetFormType).budget_amount),
        }), // Map FormData to fields
        "Budget created successfully" // Success message
    );
}

export async function createTransaction(formData: object) {
    console.log(formData);
    
   return createTransactionEntity(
        "transactions", // Table name
        transactionSchema,
        formData,
        (formData) => ({
            name: (formData as TransactionFormType).name as string,
            amount: Number((formData as TransactionFormType).amount),
            // repeat: (formData as TransactionFormType).repeat as string,
            category_type: (formData as TransactionFormType).category_type as string,
            pot_id: Number((formData as TransactionFormType).pot_id) as number,
            transaction_date: (formData as TransactionFormType).transaction_date as string,
        }),
        "Transaction created successfully"
    );
}  

export async function editPot(formData: object){
    return updateEntity(
        "pots", // Table name
        z.object({
            name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
            target_amount: z.number().optional(),
        }), // Validation schema
        formData,
        (formData) => ({
            name: (formData as PotFormType).name as string,
            target_amount: (formData as PotFormType) ? Number((formData as PotFormType).target_amount) : undefined,
        }), // Map FormData to fields

        "Pot edited successfully" // Success message
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


