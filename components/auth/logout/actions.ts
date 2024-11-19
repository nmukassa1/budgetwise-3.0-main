"use server"

import { deleteSession } from "@/lib/session";

export default async function logout(){
    return await deleteSession();
}