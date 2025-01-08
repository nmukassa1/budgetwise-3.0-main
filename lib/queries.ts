"use server"
import { cache } from "react";
import { verifySession } from "./session";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

// export const revalidate = 3600;

const verifyAndGetSession = cache(async () => {
    const session = await verifySession();
    if (!session?.userId) {
        console.log('No session found');
        throw new Error('Invalid session');
    }
    return session;
});

export const getUser = cache(async () => {
    const session = await verifyAndGetSession();

    const { data: user } = await supabase.from('users').select('*').eq('id', session.userId).single();

    return user;
});


export const getTransactionsByType = async (type: string) => {
    const session = await verifyAndGetSession();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based

    const { data: transactions } = await supabase
        .from('transactions').select('*')
        .eq('user_id', session.userId)
        .eq('category_type', type)
        .gte('created_at', `${currentYear}-${currentMonth}-01`)
        .lte('created_at', `${currentYear}-${currentMonth}-31 23:59:59.999999`)
        .order('created_at', { ascending: false });

        console.log(transactions);
        
        
    return transactions;
}

export const getTransactionsById = async (id: number, match: string) => {
    const session = await verifyAndGetSession();

    const { data: transactions } = await supabase
        .from('transactions')
        .select('*').eq('user_id', session.userId)
        .eq(match, id)
        .order('created_at', { ascending: false });

        revalidatePath("/dashboard");
    return transactions;
}

export const getCurrentMonthTransactionsById = async (id: number, match: string) => {
    const session = await verifyAndGetSession();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based

    const { data: transactions } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', session.userId)
        .eq(match, id)
        .gte('created_at', `${currentYear}-${currentMonth}-01`)
        .lte('created_at', `${currentYear}-${currentMonth}-31 23:59:59.999999`)
        .order('created_at', { ascending: false });

    revalidatePath("/dashboard");
    return transactions;
}

export const getTransactions = async () => {
    const session = await verifyAndGetSession();

    const { data: transactions } = await supabase.from('transactions').select('*').eq('user_id', session.userId);
    return transactions;
}

export const getPots = async () => {
    const session = await verifyAndGetSession();

    const { data: pots } = await supabase.from('pots').select('*').eq('user_id', session.userId);
    return pots;
};

export const getBudgets = async () => {
    const session = await verifyAndGetSession();

    const { data: budgets } = await supabase.from('budget').select('*').eq('user_id', session.userId);
    return budgets;
}