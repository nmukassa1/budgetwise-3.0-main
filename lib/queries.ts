import { cache } from "react";
import { verifySession } from "./session";
import { supabase } from "./supabase";

const verifyAndGetSession = cache(async () => {
    const session = await verifySession();
    if (!session?.userId) {
        console.log('No session found');
        throw new Error('Invalid session');
    }
    return session;
});

export const getUser = cache (async () => {
    const session = await verifyAndGetSession();

    const {data: user} = await supabase.from('users').select('*').eq('id', session.userId).single();

    return user;
})

export const getCategories = cache (async () => {
    const session = await verifyAndGetSession();

    const {data: categories} = await supabase.from('categories').select('*').eq('user_id', session.userId);
    return categories;
})