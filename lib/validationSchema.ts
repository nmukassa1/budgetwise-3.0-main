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


export const potSchema = z.object({
    name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
    target_amount: z.string().optional(),
});

export const budgetSchema =  z.object({
    name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
    budget_amount: z.number().optional(),
})

export const transactionSchema = z.object({
    amount: z.number().refine(value => value !== 0, { message: 'Amount cannot be 0' }),
    name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
    category_type: z.string(),
    // repeat: z.string(),
    pot_id: z.number().optional(),
    transaction_date: z.string(),
});
export const transactionBudgetSchema = z.object({
    amount: z.number().refine(value => value !== 0, { message: 'Amount cannot be 0' }),
    name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
    category_type: z.string(),
    // repeat: z.string(),
    budget_id: z.number().optional(),
    transaction_date: z.string(),
});

export const editPotSchema = z.object({
    name: z.string().min(2,{ message: 'Name must be longer than 2 characters' }),
    target_amount: z.number().optional(),
})