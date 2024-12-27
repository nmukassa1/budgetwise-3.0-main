import { z } from "zod";
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

interface Errors {
    name?: string[];
    goal?: string;
    error?: string;
    in?: string;
  }


export default async function createTransactionEntity<T extends Record<string, unknown>>(
    tableName: string,
    validationSchema: z.ZodSchema<T>,
    formData: object,
    fieldMappings: (formData: object) => Partial<T>,
    successMessage: string,
): Promise<
    | { errors: Errors; results?: undefined }
    | { results: { message: string; data: T[] }; errors?: undefined }
> {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
        return {
            errors: {
                error: "User is not authenticated",
            },
        };
    }

    let amount;
    if('action' in formData && 'amount' in formData){
        if(formData['action'] === 'withdraw'){
            amount = -Math.abs(Number(formData['amount']));
        }
        else{
            amount = Math.abs(Number(formData['amount']));
        }
    }

    const amendedFormData = {
        ...formData,
        amount,
    };

    console.log('Amended form data: ', amount, amendedFormData);
    
    

    const mappedFields = fieldMappings(amendedFormData);
    

    // Validate fields using the provided schema
    const validation = validationSchema.safeParse(mappedFields);
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            errors: validation.error.flatten().fieldErrors,
        };
    }

    

    try {
        // Insert into the database
        const { data, error } = await supabase
            .from(tableName)
            .insert({...validation.data, user_id: session.userId})
            .select("*");

        if (error) {
            console.log('Supabase error: ', error);
            let uniqueError;
            switch (error.code) {
                case "23505":
                    uniqueError = "This name already exists";
                    break;
                default:
                    uniqueError = "An error occurred while creating the entity";
            }
        
            return {
                errors: {
                    error: uniqueError,
                },
            };
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard");

        return {
            results: { message: successMessage, data },
        };
    } catch (error) {
        console.log('Caught error: ', error);
        return {
            errors: {
                error: "An unexpected error occurred",
            },
        };
    }
}
