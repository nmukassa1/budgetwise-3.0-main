"use server"

import { loginFormSchema } from "@/lib/validationSchema";
import bcrypt from 'bcrypt';
import {supabase} from '@/lib/supabase';
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(state: object, formData: FormData){
    // 1. Validate fields
    const validation = loginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });
    // Validation failed
    if(!validation.success){
        console.log(validation.error.flatten().fieldErrors);
        
        return {
           errors: validation.error.flatten().fieldErrors
        }
    }

    // Validation passed
    const { email, password } = validation.data;

    // Check if user exists
    const {data: user} = await supabase.from('users').select('*').eq('email', email).single();

    // User does not exist
    if(!user){
        const errorMessage = 'User does not exist';
        console.log(errorMessage);
        return {
            errors: {
                userExists: errorMessage
            }
        }
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Password does not match
    if(!passwordMatch){
        const errorMessage = 'Password does not match';
        console.log(errorMessage);
        return {
            errors: {
                passwordMatch: errorMessage
            }
        }
    }

    // Create session
    await createSession(user.id);

    // Redirect to dashboard
    redirect('/dashboard');
}