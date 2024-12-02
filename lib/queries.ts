"use server"
import { cache } from "react";
import { verifySession } from "./session";
import { supabase } from "./supabase";

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

export const getCategories = async () => {
    const session = await verifyAndGetSession();

    const { data: categories } = await supabase.from('categories').select('*').eq('user_id', session.userId);
    return categories;
};

export const getTransactionsByType = async (type: string) => {
    const session = await verifyAndGetSession();

    const { data: transactions } = await supabase.from('transactions').select('*').eq('user_id', session.userId).eq('category_type', type);
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
