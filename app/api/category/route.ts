import { createNewCategory } from "@/lib/mutations";
import { getCategories } from "@/lib/queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const category = await getCategories();
    
    return NextResponse.json({category});
}

export async function POST(req: NextRequest){
    const body = await req.json();
    const results = await createNewCategory(body);

    if(results?.errors){
        // console.log('API error', results.errors);
        return NextResponse.json({errors: results.errors});
    }
    
    const category = await getCategories();
    
    console.log('API success', results);
    
    return NextResponse.json({message: 'Category created', results: category});
}