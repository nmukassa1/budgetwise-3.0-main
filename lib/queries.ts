import { cache } from "react";
import { verifySession } from "./session";
import { supabase } from "./supabase";

export const getUser = cache (async () => {
    const session = await verifySession()
    if(!session?.userId){
        console.log('No session found');
    }

    const {data: user} = await supabase.from('users').select('*').eq('id', session.userId).single();

    return user;
})