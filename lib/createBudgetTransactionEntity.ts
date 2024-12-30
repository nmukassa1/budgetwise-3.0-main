import { z } from "zod";
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { ErrorFetch, SuccessFetch } from "./types";

export default async function createBudgetTransactionEntity<T extends Record<string, unknown>>(
    tableName: string,
    validationSchema: z.ZodSchema<T>,
    formData: object,
    fieldMappings: (formData: object) => Partial<T>,
    successMessage: string,
): Promise<SuccessFetch | ErrorFetch> {
    const session = await verifySession();
    if (!session?.userId) {
        console.log("No session found");
        return {
            status: "error",
            message: "User is not authenticated",
            data: {},
        };
    }
    

    const mappedFields = fieldMappings(formData);
    

    // Validate fields using the provided schema
    const validation = validationSchema.safeParse(mappedFields);
    if (!validation.success) {
        console.log(validation.error.flatten().fieldErrors);
        return {
            status: "error",
            message: "Validation failed",
            data: validation.error.flatten().fieldErrors,
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
                status: "error",
                message: uniqueError,
                data: {},
            };
        }

        // Trigger revalidation of a specific path
        revalidatePath("/dashboard");

        return {
            status: "success",
            message: successMessage,
            data: data,
        };
    } catch (error) {
        console.log('Caught error: ', error);
        return {
            status: "error",
            message: "An unexpected error occurred",
            data: {},
        };
    }
}
