"use client"

import Sidebar from '@components/Sidebar';
import { usePathname } from "next/navigation";

export default function layout({children}){

    let pathname = usePathname();
    pathname = pathname.split('/').pop().toLowerCase();
    let header = pathname === 'dashboard' ? 'Overview' : pathname.charAt(0).toUpperCase() + pathname.slice(1);

    return(
        <div className='flex bg-background'>
            <Sidebar />
            <div className='flex-grow px-10 py-8'>
            {/* <div className='flex-grow h-[90vh]'> */}
                <h1 className="text-primary text-2xl font-bold mb-4">{header}</h1>
                {children}
            </div>
        </div>
    )
}