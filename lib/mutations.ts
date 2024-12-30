"use server"
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { budgetSchema, editPotSchema, potSchema, transactionBudgetSchema, transactionSchema } from "./validationSchema";

import { revalidatePath } from "next/cache";
import createEntity from "./createEntity";
import updateEntity from "./updateEntity";
import createTransactionEntity from "./createTransactionEntity";
import {NewBudgetFormType, PotFormType, PotTransactionFormType, BudgetTransactionType, EditBudgetType} from '@/lib/types';
import createBudgetTransactionEntity from "./createBudgetTransactionEntity";
  
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
            name: (formData as PotTransactionFormType).name as string,
            amount: Number((formData as PotTransactionFormType).amount),
            // repeat: (formData as PotTransactionFormType).repeat as string,
            category_type: (formData as PotTransactionFormType).category_type as string,
            pot_id: Number((formData as PotTransactionFormType).pot_id) as number,
            transaction_date: (formData as PotTransactionFormType).transaction_date as string,
        }),
        "Transaction created successfully"
    );
}  
export async function createBudgetTransaction(formData: object) {
    console.log(formData);
    
   return createBudgetTransactionEntity(
        "transactions", // Table name
        transactionBudgetSchema,
        formData,
        (formData) => ({
            name: (formData as BudgetTransactionType).name as string,
            amount: Number((formData as BudgetTransactionType).amount),
            // repeat: (formData as BudgetTransactionType).repeat as string,
            category_type: 'expense',
            budget_id: Number((formData as BudgetTransactionType).budget_id) as number,
            transaction_date: (formData as BudgetTransactionType).transaction_date as string,
        }),
        "Transaction created successfully"
    );
}  

export async function editPot(formData: object){
    return updateEntity(
        "pots", // Table name
        editPotSchema, // Validation schema
        formData,
        (formData) => ({
            name: (formData as PotFormType).name as string,
            target_amount: (formData as PotFormType) ? Number((formData as PotFormType).target_amount) : undefined,
        }), // Map FormData to fields

        "Pot edited successfully" // Success message
    );
}
export async function editBudget(formData: object){
    return updateEntity(
        "budget", // Table name
        budgetSchema, // Validation schema
        formData,
        (formData) => ({
            name: (formData as EditBudgetType).name as string,
            budget_amount: Number((formData as EditBudgetType).budget_amount),
        }), // Map FormData to fields

        "Budget edited successfully" // Success message
    );
}


export async function deleteItem(id: number, tableName: string){
    // console.log(categoryId);
    
    const session = await verifySession();
        if(!session?.userId){
            console.log('No session found');
        }
    
        try{
            //Delete category
            const {data, error} = await supabase.from(tableName).delete().match({
                id: id,
                user_id: session.userId
            }).select('*');
    
            if(error){
                console.log(error);
                return {
                    status: "error",
                    message: "Error occurred while deleting the item",
                    data: {},
                }
            }
    
            // Trigger revalidation of a specific path
            revalidatePath("/dashboard"); // Update this to the relevant path
            
            return {
                status: "success",
                message: 'Item deleted successfully',
                data: data,
            };
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


