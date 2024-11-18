//create a simple zod schema for verifying the input data
import { z } from 'zod';
export const signupFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
});

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

// export type SignupFormSchema = z.infer<typeof signupFormSchema>;


export const categorySchema = z.object({
    name: z.string().min(2),
    categoryType: z.string(),
    budgetAmount: z.number({message: 'Budget amount cannot be empty'}).int(),
    // color: z.string(),
    // icon: z.string(),
});